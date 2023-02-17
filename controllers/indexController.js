const { menuDB } = require('../database')

module.exports = {
    index: (req, res) => {
        res.render('index', {
            menuDB,
        });
    } 
}