var request = require('request');
var secrets = require('./secrets.js')
var fs = require('fs');






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
}// set vartaBLE TO AVURL AND FILEPATH
var url1 = ''
var filep = 'avatars/'
getRepoContributors("jquery", "jquery", function(err, result) {
  let avurl = result
      for(let i = 0; i < result.length; i++) {
        url1 += avurl[i].avatar_url
        filep += avurl[i].login + '.jpg'


        downloadImageByURL(url1, filep)
        url1 = ''
        filep = 'avatars/'
       // console.log(avurl[i].avatar_url)
// SET AVURL AND SET FILEPATH
      }
 // console.log("Errors:", err);
 // console.log("Result:", avurl);
});
function downloadImageByURL(url, filePath) {
  // ...
  request.get(url)
  .on('error', function (err) {
         throw err;
  })

  .pipe(fs.createWriteStream(filePath));
}
//downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")