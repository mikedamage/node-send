#!/usr/bin/env node

/**
 * NodeSend Server
 * by Mike Green <mike.is.green@gmail.com>
 */

'use strict';

var net   = require('net');
var fs    = require('fs');
var path  = require('path');
var argv  = require('yargs').argv;
var chalk = require('chalk');

var dir  = argv.hasOwnProperty('dir')  ? argv.dir  : process.cwd();
var port = argv.hasOwnProperty('port') ? argv.port : 6666;
var filename = argv.hasOwnProperty('file') ? path.join(dir, argv.file) : path.join(dir, 'upload');
var outfile = fs.createWriteStream(filename);

var server = net.createServer(function(conn) {
  console.log('Received connection from ' + conn.remoteAddress);
  conn.pipe(outfile);
});

server.listen(port, function() { console.log(chalk.green('Started server on port ' + port)); });
