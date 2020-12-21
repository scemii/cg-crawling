const crawler = require("crawler");
const fs = require("fs");
const cron = require("node-cron");

function mergeArrayObjects(arr1, arr2) {
  return arr1.map((item, i) => {
    if (item.id === arr2[i].id) {
      //merging two objects
      return Object.assign({}, item, arr2[i]);
    }
  });
}

const c = new crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res) {
    if (res) {
      let gcList = [];
      let statusList = [];
      let images = [];
      const $ = res.$;
      $(".title-3 a").each((i, el) => {
        const item = $(el).text();
        gcList.push({ gc: item });
      });
      $(".stocks").each((i, el) => {
        const item = $(el).find("span").text();
        statusList.push({ status: item });
      });
      $(".pdt-item").each((i, el) => {
        const item = $(el).find("img").attr("src");
        const link = $(el).find("a").attr("href");
        images.push({ image: item, link: "https://www.ldlc.com" + link });
      });
      // const data = JSON.stringify({ ...mergeArrayObjects(gcList, statusList) });
      const data = mergeArrayObjects(gcList, statusList);
      const newData = JSON.stringify(mergeArrayObjects(data, images));
      console.log("formated data", newData);
      fs.writeFileSync("data_ldlc.json", newData);
      return;
    }
  },
});

// Queue just one URL, with default callback
function cronCrawling() {
  c.queue("https://www.ldlc.com/recherche/3080/+fcat-4684.html?department=all");
}

// cron worker
function startCron() {
  cron.schedule("* * * * *", () => {
    cronCrawling();
  });
}

module.exports = startCron;
