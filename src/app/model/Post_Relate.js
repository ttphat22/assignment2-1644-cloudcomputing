const client = require('../../database/dbconnect')

class Post_Relate {
    async createMany(post_id,ralates) {
        relates.forEach(category_id => {
            let query = "INSERT INTO post_category (post_id,relate_id) VALUES ('" + post_id + ',' + relate_id  +"')";
            client.execute(query)
        });
    }

    async deleteOne(post_id,tag_id) {
        let query = "DELETE FROM post_category WHERE post_id = '" + post_id + "'AND tag_id = '" + relate_id + "'";
        await client.execute(query);
    }

    async deleteAll(post_id) {
        let query = "DELETE FROM post_category WHERE post_id = '" + post_id + "'";
        await client.execute(query);
    }
}