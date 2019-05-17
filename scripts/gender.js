const customers = require('../customers.json')

const gender = (req,res) => {
  
        const filteredGender = customers.filter(customer => customer.gender == req.params.gender)
        if(filteredGender) {
            res.status(200).send(filteredGender)
        } else {
            res.send(customers)
        }
    
    
}


module.exports = gender;