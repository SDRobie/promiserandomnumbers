// 5 calls of random numbers then add


var api = require('./api');

function rando () {
  return new Promise (function(resolve, reject){
    api.getRandomNumber(function(err, nbr) {
      if(err) {
        reject(err);
      }
      resolve(nbr);
    });
  });
}

Promise.all([ //surely there's a cleaner way to do that
  rando(),
  rando(),
  rando(),
  rando(),
  rando()
]).then(function(arr) {
  num = arr.reduce(function(a,b){ return a+b; }, 0);
  //console.log(arr); //test for 5 calls
  console.log(num);
}).catch(function(err){console.log(err)});
