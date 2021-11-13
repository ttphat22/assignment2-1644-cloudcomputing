const client = require('../../database/dbconnect')

class Post_Category {

    async createMany(post_id,categories) {
        categores.forEach(category_id => {
            let query = "INSERT INTO post_category (post_id,category_id) VALUES ('" + post_id + ',' + category_id  +"')";
            client.execute(query)
        });
    }

    async deleteOne(post_id,tag_id) {
        let query = "DELETE FROM post_category WHERE post_id = '" + post_id + "'AND tag_id = '" + tag_id + "'";
        await client.execute(query);
    }

    async deleteAll(post_id) {
        let query = "DELETE FROM post_category WHERE post_id = '" + post_id + "'";
        await client.execute(query);
    }
}

module.exports = new Post_Category