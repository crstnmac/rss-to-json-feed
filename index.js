var feed = require("rss-to-json");
// const fetch = require("node-fetch");
// const getFeed = async (url) => {
//   const data = await Feed.load(url);
//   console.log(data);
// };
// getFeed("https://morioh.com/feed");

const url = ["https://morioh.com/feed", "https://css-tricks.com/feed/"];

// Feed.load(url, null, 3).then((feed) => {
//   for (var i = 0; i < feed.items.length - 1; i++)
//     console.log(feed.items[i].author);
// });

let feedList = [];

const obtainFeed = (id, url) => {
  return new Promise((resolve, reject) => {
    feed.load(url, async (err, rss) => {
      //for(item of rss.items){
      const promises = rss.items.map(async (item) => {
        feedList.push(item.title);
      });
      await Promise.all(promises);
      resolve(feedList);
    });
  });
};

const aa = async () => {
  await url.forEach((url) => {
    obtainFeed("3", url).then((result) => {
      console.log(result);
    });
  });
};

aa();
