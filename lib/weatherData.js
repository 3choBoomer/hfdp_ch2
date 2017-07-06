var _data = {};
var observers = {};

module.exports = {
  data: _data,
  registerObserver : registerObserver,
  removeObserver : removeObserver,
  notifyObservers : notifyObservers
}

function registerObserver(observer) {
  console.log('registering Observer' + observer.name);
  observers[observer.name] = observer.update;
}

function removeObserver(observer) {
  delete observers[observer.name];
}

function notifyObservers() {
  console.log(observers);
  Object.keys(observers).forEach(function(key){
    observers[key](_data);
  });
}
