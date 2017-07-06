module.exports = {
  name: "current",
  update: update
}

function update(data){
  var output = '';
  Object.keys(data).forEach(function(key){
    if (data[key] !== null && data[key] !== undefined){
      output += key + ': ' + data[key] + '\n';
    }
  });

  console.log('Current Conditions:\n' + output);
}
