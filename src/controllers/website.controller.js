'use strict';
const Website = require('../models/website.model');
exports.findAll = function(req, res) {
    Website.findAll(function(err, website) {
        console.log('controller')
        if (err)
        res.send(err);
        console.log(res);
        res.send(website);
    });
};

exports.create = function(req, res) {
    const new_website = new Website(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error:true,
            message: 'Please provide all required field'
        });
        
    }
    else {
        Website.create(new_website, function (err, website){
            if (err)
            res.send;
            res.json({
                error: false,
                message:"Website added successfuly!",
                data:website
            });
        });
    }
};
exports.findById = function(req, res) {
    Website.findById(req.params.id, function(err, website) {
        if (err)
        res.send(err);
        res.json(website);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error:true,
            message:'Please provide all required field'
        });
    }
    else {
        Website.update(req.params.id, new Website(req.body), function(err, website) {
            if (err)
            res.send(err);
            res.json({
                error:false,
                message:'Website successfully updated'
            });
        });
    }
};
exports.delete = function(req, res) {
    Website.delete( req.params.id, function(err, website) {
        if (err)
        res.send(err);
        res.json({
            error:false,
            message: 'Website successfully deleted'
        });
    });
}

//https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6