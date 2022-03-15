module.exports = function (passport) {
    const authenticate = passport.authenticate('local')

    return {
        // login (req, res, next) {
        //     console.log("hello")
        //     authenticate(req, res, err => {
        //         if (err) return next(err)
        //         res.enforcer.status(200).send()
        //     })
        // },
        login (req, res, next) {
            authenticate(req, res, err => {
                if (err) return next(err)

                // Tell the browser to set an extra cookie. This cookie
                // is not secure, but it can help the UI to determine
                // if the user is logged in or not.
                // console.log(req.user)
                res.cookie('user', JSON.stringify(req.user.username), {
                    maxAge: 36000000 // expires in 10 hours
                })

                res.enforcer.status(200).send()
            })
        },

        logout (req, res) {
            if (req.user) {
                req.logout()
            }
            res.clearCookie("user")
            res.enforcer.status(200).send()
        }
    }
}