var request = require('request');
var secrets = require('./secrets.js')






function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
       'Authorization': secrets.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  let output = []
  let avurl = result
      for(let i = 0; i < result.length; i++) {
        console.log(avurl[i].avatar_url)

      }
 // console.log("Errors:", err);
 // console.log("Result:", avurl);
});
