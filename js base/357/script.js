// Задание 1
;(function() {
  function avg1(arr) {
    return sum(arr, 1) / arr.length;
  }

  function avg2(arr) {
    return sum(arr, 2) / arr.length;
  }

  function avg3(arr) {
    return sum(arr, 3) / arr.length;
  }

  
  function sum(arr, pow) {
    let res = 0;

    for (let elem of arr) {
      res += elem ** pow;
    }

    return res;
  }

  window.math = { avg1, avg2, avg3 };
})();
// Задание 2 (underscore аналог)
;(function() {
  function identity(value) {
    return value;
  }

  function each(collection, iteratee = identity) {
    for (let key in collection) {
      iteratee(collection[key], key, collection);
    }
  }

  function map(collection, iteratee = identity) {
    const result = [];
    each(collection, (value, key, collection) => {
      result.push(iteratee(value, key, collection));
    });
    return result;
  }

  function filter(collection, predicate = identity) {
    const result = [];
    each(collection, (value, key, collection) => {
      if (predicate(value, key, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  function reduce(collection, iteratee, accumulator) {
    each(collection, (value, key, collection) => {
      accumulator = iteratee(accumulator, value, key, collection);
    });
    return accumulator;
  }

  function find(collection, predicate = identity) {
    for (let key in collection) {
      if (predicate(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }

  window.myUnderscore = { each, map, filter, reduce, find };
})();


