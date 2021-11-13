const tagModel = require('../model/tag')
const connection = require("../../database/dbconnect");
const { findAll,findOne } = require('../model/tag');


class TagController {
    async index(req, res) {
        let result = await tagModel.findAll();
        console.log('hi')
        res.render('tag/index',{tags : result})

    }

    async create(req, res) {
        let query = "SELECT * FROM tag";
        let result = await tagModel.findAll();

        res.render('tag/create',{tags:result})
    }

    createOne(req,res) {
        let name = req.body.name;
        let description = req.body.description;

        tagModel.create(name,description)
        res.redirect('/tag/index')
    }

    async update(req,res) {
        let id = req.params.id;
        let result2 = await tagModel.findOne(id);
        let result1 = await tagModel.findAll();

        res.render('tag/update',{tag : result2[0], tags: result1})
    }

    async updateOne(req,res) {
        let id = req.body.id;
        let description = req.body.description;
        let name = req.body.name;

        await tagModel.updateOne(id,name,description)
      
        res.redirect('index')
    }

    async delete(req,res) {
        let id = req.params.id;
        await tagModel.deleteOne(id);
        res.redirect('/tag/index');
    }
}

module.exports = new TagController