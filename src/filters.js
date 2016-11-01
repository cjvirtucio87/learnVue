const _ = require('lodash');

export function idDesc (iter) {
  return _.chain(iter).orderBy('id', 'desc').value();
}
