const Twitter = require("twitter-lite");

console.log(process.env.GATSBY_TWITTER_ACCESS_TOKEN);
const client = new Twitter({
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: process.env.GATSBY_TWITTER_CONSUMER_KEY, // from Twitter.
  consumer_secret: process.env.GATSBY_TWITTER_CONSUMER_SECRET, // from Twitter.
  access_token_key: process.env.GATSBY_TWITTER_ACCESS_TOKEN, // from your User (oauth_token)
  access_token_secret: process.env.GATSBY_TWITTER_ACCESS_TOKEN_SECRET, // from your User (oauth_token_secret)
});

const cached_data = {
  tweets: null,
};

const twitterPosts = async () => {
  let tweets = null;
  if (!cached_data.tweets) {
    tweets = await client.get("statuses/user_timeline", {
      count: 5,
    });

    cached_data.tweets = tweets;
  }
  return cached_data.tweets;
};

exports.handler = async (event, context, callback) => {
  try {
    const tweets = await twitterPosts();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweets),
    };
  } catch (e) {
    console.log(e);
  }
};
