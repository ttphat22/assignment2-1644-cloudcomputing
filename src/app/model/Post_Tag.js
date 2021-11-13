const client = require('../../database/dbconnect')

class Post_Tag {

    async createMany(post_id,tags) {
        tags.forEach(tag_id => {
            let query = "INSERT INTO post_tag (post_id,tag_id) VALUES ('" + post_id + ',' + tag_id  +"')";
            client.execute(query);
        });
    }

    async deleteOne(post_id,tag_id) {
        let query = "DELETE FROM post_tag WHERE post_id = '" + post_id + "'AND tag_id = '" + tag_id + "'";
        await client.execute(query);
    }

    async deleteAll(post_id) {
        let query = "DELETE FROM post_tag WHERE post_id = '" + post_id + "'";
        await client.execute(query);
    }
}

module.exports = new Post_Tag