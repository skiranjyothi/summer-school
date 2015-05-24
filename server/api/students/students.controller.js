'use strict';

var _ = require('lodash');
var Students = require('./students.model');

// Get list of studentss
exports.index = function(req, res) {
  Students.find(function (err, studentss) {
    if(err) { return handleError(res, err); }
    return res.json(200, studentss);
  }).populate("department","name");
//});
};

// Get a single students
exports.show = function(req, res) {
  Students.findById(req.params.id, function (err, students) {
    if(err) { return handleError(res, err); }
    if(!students) { return res.send(404); }
    return res.json(students);
  });
};

// Creates a new students in the DB.
exports.create = function(req, res) {
  Students.create(req.body, function(err, students) {
    if(err) { return handleError(res, err); }
    return res.json(201, students);
  });
};

// Updates an existing students in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Students.findById(req.params.id, function (err, students) {
    if (err) { return handleError(res, err); }
    if(!students) { return res.send(404); }
    var updated = _.merge(students, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, students);
    });
  });
};

// Deletes a students from the DB.
exports.destroy = function(req, res) {
  Students.findById(req.params.id, function (err, students) {
    if(err) { return handleError(res, err); }
    if(!students) { return res.send(404); }
    students.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.deptFInd=function(req,res){
  Students.find({department:req.params.id},function)
  if(err){return handleError(res,err);}
  return res.json(200, studentss);
}

function handleError(res, err) {
  return res.send(500, err);
}