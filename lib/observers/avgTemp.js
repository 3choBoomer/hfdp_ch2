var _ = require('lodash');

module.exports = {
  name: "avgTemp",
  update: update
};
var temps = [];

function update(data){

  if (data !== null && data !== undefined
  && data.temp !== null && data.temp !== undefined){
    var num = _.toNumber(data.temp);
    if (_.isFinite(num) && _.isNumber(num)){
      temps.push(num);
    }
  }
  if (temps.length > 0) {
    var avg = getAvg(temps);
    var output = 'Average Temp: ' + avg + ' from ' + temps.length + ' recorded temps.';
    console.log(output);
  }
}

function getAvg(arr) {
  return arr.reduce(function (p, c) {
    return p + c;
  }) / arr.length;
}
