'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(a=>a%2!=0).map(a=>a*3+2);
}

module.exports = hybrid_operation_to_uneven;

