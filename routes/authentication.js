const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {
        if(!req.body.email || !req.body.username || !req.body.password) {
            res.send('all reqired');
        } else {
            let user = new User({
                email: req.body.email.toLowerCase(),
                username: req.body.username.toLowerCase(),
                password: req.body.password
            });
            user.save((err) => {
                if(err) {
                    res.json({success: false, message: 'could not save user', err});
                } else {
                    res.json({success: true, message: 'user saved'});
                }
            });
        }
    });
    return router;
}