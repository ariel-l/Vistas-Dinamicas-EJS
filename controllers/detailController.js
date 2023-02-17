const { menuDB } = require('../database')

module.exports = {
    detail: (req, res) => {

        const productID = req.params.id
        
        const productFind = menuDB.find(product => product.id === Number(productID))
        
        return res.render('detalleMenu', {
            productFind,
        })
    }
}