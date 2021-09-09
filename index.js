#!/usr/bin/env node
const chokidar = require('chokidar');
const prog = require('caporal');
const chalk = require('chalk');
const fs = require('fs');
const child_process = require('child_process');

function debounce(fn, wait) {
  let timeout;
  return (...params) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(params);
    }, wait);
  };
}

prog
  .version('1.0.0')
  .argument('[filename]', 'Name of file to execute on change')
  .action(async (args) => {
    const path = args.filename || 'index.js';
    try {
      fs.promises.access(path);
    } catch (err) {
      throw new Error(`Couldn't find the file ${path}`);
    }
    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.redBright('>>> Starting Process..'));
      proc = child_process.spawn('node', [path], { stdio: 'inherit' });
    }, 100);

    chokidar
      .watch('.')
      .on('add', start)
      .on('change', start)
      .on('unlink', start);
  });

prog.parse(process.argv);
