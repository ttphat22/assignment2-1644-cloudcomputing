const client = require("../../database/dbconnect");

class Tag {

    async findAll() {
        let query = "SELECT * FROM tag";
        const [rows] = await client.execute(query);
        return rows;
    }

    async findOne(id) {
        let query = "SELECT * FROM tag where id = '" + id + "'";
        const [rows] = await client.execute(query);
        return rows;
    }

    async updateOne(id,name,description) {
        let query =  "UPDATE tag set tag_name = '" + name + "', description = '" + description + "' WHERE id = '" + id +"'";
        await client.execute(query);
        
    }

    async deleteOne(id) {
        let query =  "DELETE FROM tag where id = '" + id +"'";
        await client.execute(query);
    }

    async create(name,description) {
        let query = "INSERT INTO tag (tag_name, description) VALUES ('" + name + "','" + description + "')";
        await client.execute(query)
    }

}

module.exports = new Tag;