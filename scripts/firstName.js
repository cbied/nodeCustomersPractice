const customers = require('../customers')

const firstName = (req,res) => {

    const findName = customers.find(customer => customer.first_name === req.params.firstName)
    if(findName) {
        res.status(200).send(findName)
    } else {
        res.status(500).send('customer not in list')
    }

}


module.exports = firstName