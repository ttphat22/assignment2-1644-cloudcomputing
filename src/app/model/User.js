const client = require("../../database/dbconnect");

class User {
    async findAll() {
        let query = "SELECT * FROM user";
        const [rows] = await client.execute(query);
        return rows;
    } 

    async findOne(id) {
        let query = "SELECT * FROM user where id = '" + id + "'";
        const [rows] = await client.execute(query);
        return rows;
    }

    async create(firstname,lastname,password,email,address,phone) {
        let query = "INSERT INTO user (firstname,lastname,password,email,address,phone) VALUES ('" + firstname + "','" + lastname + "','" + password + "','" + email + "','" + address + "','" + phone + "')";
        await client.execute(query)
    }

    async deleteOne(id) {
        let query = "DELETE FROM user WHERE id = '" + id + "'";
        await client.execute(query)
    }

    async updateOne(id, firstname,lastname,password,email,address,phone) {
        let query =  "UPDATE user set firstname = '" + firstname + "', lastname = '" + lastname + "', password = '" + password + "', address = '" + address + "', email = '" + email + "', phone = '" + phone + "' WHERE id = '" + id +"'";
        // let query =  "UPDATE user set ?  WHERE id = ?";
        
        await client.execute(query)
    }



}

module.exports = new User;