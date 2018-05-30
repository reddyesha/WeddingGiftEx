
// ========================================================
// Exporting to mLab database
// ========================================================

module.exports = {

    'url' : 'mongodb://complicationlamp:gradschool1@ds263759.mlab.com:63759/blog-posts-1'
    // 'url' : 'mongodb://localhost/jwt-auth-demo'    
};

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://<complicationlamp>:<gradschool1>@ds139920.mlab.com:39920/test-users-db';