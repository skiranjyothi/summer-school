/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Students = require('./students.model');

exports.register = function(socket) {
  Students.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Students.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('students:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('students:remove', doc);
}