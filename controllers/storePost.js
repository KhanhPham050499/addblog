const BlogPost = require('../models/BlogPost')
const path = require('path');
module.exports = (req,res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/upload', image.name), function(error)  {
        BlogPost.create({...req.body, image: '/upload/' + image.name } , (error, blogpost) => {
            res.redirect('/');
    })
    })
}