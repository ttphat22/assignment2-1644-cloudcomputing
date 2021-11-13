const client = require("../../database/dbconnect");

class Category {

    async findAll() {
        let query = "SELECT * FROM category";
        const [rows] = await client.execute(query);
        return rows;
    }

    async findOne(id) {
        let query = "SELECT * FROM category where id = '" + id + "'";
        const [rows] = await client.execute(query);
        return rows;
    }

    async updateOne(id,name,description,parent) {
        let query =  "UPDATE category set category_name = '" + name + "', description = '" + description + "', parent = '"+ parent + "' WHERE id = '" + id +"'";
        await client.execute(query);
        
    }

    async deleteOne(id) {
        let query =  "DELETE FROM category where id = '" + id +"'";
        await client.execute(query);
    }

    async create(name,description,parent) {
        let query = "INSERT INTO category (category_name, description, parent) VALUES ('" + name + "','" + description + "','" + parent + "')";
        await client.execute(query)
    }

}

module.exports = new Category;