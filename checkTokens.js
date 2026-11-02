let myToken = "12345"

let checkTokens = (req, res, next)=> {

    if(req.query.Token == "" || req.query.Token == undefined)
    {
         return res.send({

            status : 0,
            msg : "please fill token "
        }
        )
    }
    if(req.query.Token != myToken)
    {
       return res.send({

            status : 0,
            msg : " please fill correct token "
        })
    }
    next();

}

module.exports = checkTokens;