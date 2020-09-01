module.exports = (req, res, next) => {
    if ( req.body.title == null || req.body.body == null || req.files == null) {
        return res.redirect('/posts/new')
    }
    next()
}