var _ = require('lodash');

module.exports = {
  name: "avgHumidity",
  update: update
};
var humidityVals = [];

function update(data){

  if (data !== null && data !== undefined
  && data.data !== null && data.humidity !== undefined){
    var num = _.toNumber(data.humidity);
    if (_.isFinite(num) && _.isNumber(num)){
      humidityVals.push(num);
    }
  }
  var avg = getAvg(humidityVals);
  var output = 'Average Humidity: ' + avg + ' from ' + humidityVals.length + ' recorded humidity values.';
  console.log(output);
}

function getAvg(arr) {
  return arr.reduce(function (p, c) {
    return p + c;
  }) / arr.length;
}
