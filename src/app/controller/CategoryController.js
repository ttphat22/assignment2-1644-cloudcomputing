const categoryModel = require('../model/Category')
const connection = require("../../database/dbconnect");
const { findAll,findOne } = require('../model/Category');


class CategoryController {
    async index(req, res) {
        let result = await categoryModel.findAll();
        res.render('category/index',{categories : result})

    }

    async create(req, res) {
        let result = await categoryModel.findAll();
        res.render('category/create',{categories:result})
    }

    createOne(req,res) {
        let name = req.body.name;
        let description = req.body.description;
        let parent = req.body.parent;

        categoryModel.create(name,description,parent)
        res.redirect('/category/index')
    }

    async update(req,res) {
        let id = req.params.id;
        let result2 = await categoryModel.findOne(id);
        let result1 = await categoryModel.findAll();

        res.render('category/update',{category : result2[0], categories: result1})
    }

    async updateOne(req,res) {
        let id = req.body.id;
        let parent = req.body.parent;
        let description = req.body.description;
        let name = req.body.name;

        await categoryModel.updateOne(id,name,description,parent)
      
        res.redirect('index')
    }

    async delete(req,res) {
        let id = req.params.id;
        await categoryModel.deleteOne(id);
        res.redirect('/category/index');
    }
}

module.exports = new CategoryController