#!/usr/bin/env node
const chokidar = require('chokidar');
const prog = require('caporal');

function debounce(fn, wait) {
  let timeout;
  return (...params) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(params);
    }, wait);
  };
}

const start = debounce(() => {
  console.log('starting');
}, 100);

const path = process.argv[2] || '.';

chokidar
  .watch(path)
  .on('add', start)
  .on('change', () => console.log('file changed'))
  .on('unlink', () => console.log('file unlinked'));
