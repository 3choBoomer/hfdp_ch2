var weatherData = require('./weatherData');

module.exports = {
  add: addObserver,
  remove: removeObserver
}

function addObserver(observerName){
  try{
    var observer = require('./observers/' + observerName);
    if (observer && observer.name && observer.update) {
      weatherData.registerObserver(observer);
      return true;
    }
  }
  catch (err){
    console.log(err);
    return false;
  }

  return false;
}

function removeObserver(observerName) {
 weatherData.removeObserver(observerName);
}
