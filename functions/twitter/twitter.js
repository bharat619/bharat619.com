const Twitter = require("twitter-lite");

exports.handler = async (event, context, callback) => {
  const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: "TVUCFTfZrEUxs3rk19wvM7svV", // from Twitter.
    consumer_secret: "jJMMJw1QvTTFKPh1ln2nkUojIo2aDixzLoAHM0Vwo6yhMS6E4r", // from Twitter.
    access_token_key: "1007332552124710912-ge7EnOwCxZARsQ2THXlyl9NY4S2U3I", // from your User (oauth_token)
    access_token_secret: "XtQd23rOHSgO40OiVuhse4zW4arFMyNfCzcM6ISNiGFoN", // from your User (oauth_token_secret)
  });

  try {
    const tweets = await client.get("statuses/user_timeline", {
      count: 5,
    });
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
