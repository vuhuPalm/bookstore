const {book} = require('../models')


//view all
module.exports.viewAll = async function(req, res) {
    const books = await book.findAll();
    res.render('book/view_all', {books});
}

//profile
module.exports.viewProfile = async function(req, res) {
    const book = await book.findByPk(req.params.id);
    res.render('book/profile', {book})
}

//render add form
module.exports.renderEditForm = async function(req, res) {
    const book = await book.findByPk(req.params.id);
    res.render('book/edit', {book});
}

//add

//render edit form

//update

//delete