#!/usr/bin/env node
const chokidar = require('chokidar');
const prog = require('caporal');

const path = process.argv[2] || '.';

chokidar
  .watch(path)
  .on('add', console.log('started'))
  .on('change', () => console.log('file changed'))
  .on('unlink', () => console.log('file unlinked'));
