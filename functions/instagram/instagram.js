require("isomorphic-fetch");
const fs = require("fs");

const { IgApiClient } = require("instagram-private-api");

async function instagramData() {
  const ig = new IgApiClient();

  ig.state.generateDevice(process.env.GATSBY_INSTAGRAM_USERNAME);
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(
    process.env.GATSBY_INSTAGRAM_USERNAME,
    process.env.GATSBY_INSTAGRAM_PASSWORD
  );
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  const userFeed = ig.feed.user(loggedInUser.pk);
  const myPostsFirstPage = await userFeed.items();
  const posts = myPostsFirstPage.slice(0, 10).map((post) => {
    const url = post.image_versions2.candidates[0];

    return {
      id: post.pk,
      thumbnail: url && url.url,
      url: `https://instagram.com/p/${post.code}`,
    };
  });
  return posts;
}

async function fetchAndCacheInstagramData() {
  const instaData = await instagramData();
  const data = { data: instaData, loadedAt: Date.now() };
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2), "utf-8");
  return data;
}

async function getPosts() {
  const fileData = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
  const loadedAt = fileData.loadedAt || 0;
  const time = Date.now() - loadedAt;
  if (time >= 1800000) {
    return await fetchAndCacheInstagramData();
  }
  return fileData;
}

exports.handler = async (event, context, callback) => {
  const posts = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(posts.data),
  });
};
