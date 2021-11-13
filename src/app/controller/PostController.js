const postModel = require('../model/Post')
const tagModel = require('../model/Tag')
const categoryModel = require('../model/Category')
const postTagModel = require('../model/Post_Tag')
const postCategoryModel = require('../model/Post_Category')
const postRelateModel = require('../model/Post_Relate')

class PostController {

    async index(req,res) {
        
    }

    async create(req,res) {
        let tags = await tagModel.findAll();
        let categories = await categoryModel.findAll();
        let posts = await postModel.findAll();

        res.render('post/create', {tags:tags, categories:categories, posts:posts})
    }   

    createOne(req,res) {
        console.log(req.body)
        let title = req.body.title;
        let content = req.body.content
        let sapo = req.body.sapo;
        let tags = req.body.tag;
        let categories = req.body.categories;

        


    }

    async update(req,res) {
        let post_id = req.params.post_id;
        let tags = await tagModel.findAll();
        let categories = await categoryModel.findAll();
        let posts = await postModel.findAll();
        let relate_id = await postRelateModel
        
    }

    async updateOne(req,res) {

    }

    async delete(req,res) {
        
    }

}

module.exports = new PostController;