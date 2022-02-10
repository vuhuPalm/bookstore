const {book} = require('../models')

//view all
module.exports.viewAll = async function(req, res) {
    const books = book.findAll();
    res.render('book/view_all', {books});
}
//profile

//render add form

//add

//render edit form

//update

//delete