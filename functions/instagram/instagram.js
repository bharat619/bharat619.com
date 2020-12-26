require("isomorphic-fetch");

const cachedPosts = {
  posts: [],
};

exports.handler = async (event, context) => {
  const query = `https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"2157021316","first":8}`;

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
        thumbnail: edge.node.thumbnail_resources[2].src,
        url: `https://instagram.com/p/${edge.node.shortcode}`,
      })
    );

    cachedPosts.posts = igPosts;
    return {
      statusCode: 200,
      body: JSON.stringify(igPosts),
    };
  }
};