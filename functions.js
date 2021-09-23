const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let result = [];

  each(collection, function (value) {
    if (callback(value)) {
      result.push(value);
    }
  });
  return result;
};
//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  return filter(collection, function (value) {
    return !callbackTest(value);
  });
}; 

//use indexOf to solve this
const uniq = function (array) {
let result = [];
each(array, function (element){
  if(indexOf(result, element) === -1){
    result.push(element);
  }
});
  return result
};

const reduce = function (collection, iterator, accumulator) {};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
