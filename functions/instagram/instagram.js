require("isomorphic-fetch");

const cachedPosts = {
  posts: [],
};

exports.handler = async (event, context) => {
  const query = `https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"2157021316","first":8, "after":"QVFDVURvcXZYNFNuRnhTUlJQNlkzR0VTNDFTdHhCc0xzOXd4MzhBR3ZZZTFlU3VmOWlUM2JsaVVhVlk1Wm40SUpuc2V4aGFGVkw3d3BGVS1oVVlEekNwTQ=="}`;

  if (cachedPosts.posts.length) {
    return {
      statusCode: 200,
      body: JSON.stringify(cachedPosts.post),
    };
  } else {
    const response = await fetch(query).then((res) => res.json());

    const igPosts = response.data.user.edge_owner_to_timeline_media.edges.map(
      (edge) => ({
        id: edge.node.id,
        thumbnail: edge.node.thumbnail_resources[4].src,
        url: `https://instagram.com/p/${edge.node.shortcode}`,
        alt: edge.node.text,
      })
    );

    cachedPosts.posts = igPosts;
    return {
      statusCode: 200,
      body: JSON.stringify(igPosts),
    };
  }
};
