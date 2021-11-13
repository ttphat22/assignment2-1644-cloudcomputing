const userModel = require('../model/User')

class UserController {
    async index(req,res) {
       let result = await userModel.findAll();
       res.render('user/index', {users : result})
       
    }

    async create(req,res) {
        res.render('user/create')
    }

    async createOne(req,res) {
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password;
        let email = req.body.email;
        let address = req.body.address;
        let phone = req.body.phone;

        userModel.create(firstname,lastname,password,email,address,phone)
        res.redirect('index')
    }

    async update(req,res) {
        let id = req.params.id;
        let result = await userModel.findOne(id);

        console.log(result)
        res.render('user/update', {user : result[0]})
    }

    async updateOne(req,res) {
        let id = req.body.id
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password;
        let email = req.body.email;
        let address = req.body.address;
        let phone = req.body.phone;

        await userModel.updateOne(id,firstname,lastname,password,email,address,phone)

        res.redirect('index')
    }

    async delete(req,res) {
        let id = req.params.id;
        await userModel.deleteOne(id);

        res.redirect('/user/index')
    }

}

module.exports = new UserController;