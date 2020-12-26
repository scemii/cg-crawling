const cron = require("node-cron");
const ldlcCrawler = require("./ldlc");
const crawler = require("crawler");
const fs = require("fs");

const c3080 = new crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res) {
    if (res) {
      const newData = ldlcCrawler(res);
      fs.writeFileSync("3080.json", newData);
      return;
    }
  },
});

const c3090 = new crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, res) {
    if (res) {
      const newData = ldlcCrawler(res);
      fs.writeFileSync("3090.json", newData);
      return;
    }
  },
});

// Queue just one URL, with default callback
function cronCrawling() {
  c3080.queue("https://www.ldlc.com/recherche/3080/+fcat-4684.html?department=all");
  c3090.queue("https://www.ldlc.com/recherche/3090/+fcat-4684.html?department=all")
}

// cron worker
function startCron() {
  cron.schedule("* * * * *", () => {
    cronCrawling();
  });
}

module.exports = startCron;
