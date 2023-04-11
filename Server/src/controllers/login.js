const users = require('../utils/users')

const login = (req, res) => {
        const { email, password } = req.query;
        console.log(email, password)
        const validUsers = users.filter((users) => users.email === email && users.password === password) 
    
        if (validUsers.length > 0) {
            return res
                .status(200)
                .json({access: true})
        } else {
            return res
                .status(400)
                .json({access: false})
        }
}

module.exports = login;