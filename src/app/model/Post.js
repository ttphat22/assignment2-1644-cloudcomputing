const client = require('../../database/dbconnect')

class Post {
    async findAll() {
        let query = "SELECT * FROM posts";
        const [rows] = await client.execute(query);
        return rows;
    }

    async findOne(id) {
        let query = "SELECT * FROM posts WHERE id = '" + id + "'";
        const [rơw] = await client.execute(query);
        return row;
    }

    async create(title,sapo,content) {
        let query = "INSERT INTO posts (title,sapo,content) WHERE sapo = '" +  title + "', sapo ='" + sapo + "', content = '" + content + "'";
        let is_inserted = await client.execute(query);
        return is_inserted;
    }

    async updateOne(id,title,sapo,content) {
        let query = "UPDATE posts SET title = '" + title + "',sapo = '" + sapo + "', content = '" + content + "' WHERE id = '" + id + "'";
        let is_updated = await this.execute(query);
        return is_updated;
    }   

    async delete(id) {
        let query = "DELETE FROM posts WHERE id = '" + id + "'";
        let is_deleted = await this.execute(query)
        return is_updated;
    }

}

module.exports = new Post;