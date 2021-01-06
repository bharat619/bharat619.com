require("isomorphic-fetch");

const cached_data = {
  posts: null,
};

const query = `https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"2157021316","first":8, "after":"QVFDVURvcXZYNFNuRnhTUlJQNlkzR0VTNDFTdHhCc0xzOXd4MzhBR3ZZZTFlU3VmOWlUM2JsaVVhVlk1Wm40SUpuc2V4aGFGVkw3d3BGVS1oVVlEekNwTQ=="}`;

const loadIgPosts = async () => {
  let igPosts = null;
  if (!cached_data.posts) {
    const response = await fetch(query).then((res) => res.json());
    igPosts = response.data.user.edge_owner_to_timeline_media.edges.map(
      (edge) => ({
        id: edge.node.id,
        thumbnail: edge.node.thumbnail_resources[4].src,
        url: `https://instagram.com/p/${edge.node.shortcode}`,
        alt: edge.node.text,
      })
    );
    console.log(`Caching ${igPosts}`);
    cached_data.posts = igPosts;
  }
  console.log(`returning ${cached_data.posts}`);
  return cached_data.posts;
};

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(await loadIgPosts()),
  };
};
