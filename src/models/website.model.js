'use strict'
var dbConn = require('./../../config/db.config');

var Website = function(website) {
    this.url         = website.url;
    this.score       = website.score;
    this.safety      = website.safety;
    this.uploaded_at = website.updated_at;
    this.updated_at  = website.updated_at;
};

Website.create = function (newWeb, result) {
    var agora = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
    newWeb.updated_at = agora;
    newWeb.uploaded_at = agora;
    dbConn.query(
        "INSERT INTO website set ?", newWeb, function (err, res) {
            if(err) {
                console.log("error", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
    });
};

Website.findById = function (id, result) {
    dbConn.query(
        "Select * from website where idwebsite = ?", id, function (err, res) {
            if(err) {
                console.log("error", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
    })
};

Website.findAll = function (result) {
    dbConn.query(
        "Select * from website", function (err, res) {
            if(err) {
                console.log("error", err);
                result(err, null);
            }
            else{
                console.log('website : ', res);
                result(null, res);
            }
    });
};

Website.update = function (id, website, result) {
    var agora = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
    dbConn.query(
        "UPDATE website SET url=?, score=?, safety=?, updated_at=?", 
        [
            website.url,
            website.score,
            website.safety,
            agora
        ], function (err, res) {
            if(err) {
                console.log("error", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });
};

Website.delete = function(id, result){
    dbConn.query(
        "DELETE FROM website WHERE idwebsite = ?", 
        [id], function (err,res) {
        if(err) {
            console.log("error", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Website;