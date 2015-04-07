'use strict';

var chalk = require('chalk');

// Handle begin messaging
exports.begin = function () {
  console.log(chalk.blue('Starting pa11y scan'));
};

// Handle a log message
exports.log = function (msg) {
  console.log(chalk.cyan(msg));
};

// Handle a debug message
exports.debug = function (msg) {
  console.log(chalk.grey(msg));
};

// Handle an error
exports.error = function (msg) {
  console.log(chalk.red(msg));
};

// Handle results
exports.handleResult = function (result) {
  console.log(chalk.red("Errors: %s"), result.count.error);
  console.log(chalk.yellow("Warnings: %s"), result.count.warning);
  console.log(chalk.blue("Notices: %s"), result.count.notice);
  
  if (result.count.error === 0) {
    console.log(chalk.bgGreen('Pa11y tests passed.'));
    process.exit(0);
  } else {
    console.log(chalk.bgRed('Pa11y tests failed.'));
    process.exit(1);
  }
};

// Handle end messaging
exports.end = function () {
  console.log(chalk.blue(line));
};
