#!/usr/bin/env node

/**
 * NodeSend Server
 * by Mike Green <mike.is.green@gmail.com>
 */

'use strict';

var net     = require('net');
var fs      = require('fs');
var path    = require('path');
var argv    = require('yargs').argv;
var chalk   = require('chalk');
var through = require('through2');
var temp    = require('temp').track();
var cp      = require('cp');

var dir  = argv.hasOwnProperty('dir')  ? argv.dir  : process.cwd();
var port = argv.hasOwnProperty('port') ? argv.port : 6666;

var bytesReceived = 0;

var server = net.createServer(function(conn) {
  console.log('Received connection from ' + conn.remoteAddress);

  var tempStream = temp.createWriteStream();
  var output = path.join(dir, 'output');
  
  tempStream.on('end', function() {
    cp(tempStream.path, output, function() {
      console.log(chalk.green('Saved: ') + output);
    });
  });

  conn.pipe(tempStream);
});

server.on('error', function(err) {
  console.log(chalk.red('Server Error'));
  console.log(err);
  server.close();
  process.exit();
});

server.listen(port, function() { console.log(chalk.green('Started server on port ' + port)); });
