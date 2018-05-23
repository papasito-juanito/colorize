// Local import
const config = require('../../../config');
const middleware = require('../../middlewares/isAuthenticated');

module.exports = (req, res) => {

  console.log('control req.session.mail :',req.session.userMail)
   middleware(req.session.userMail).then(function(auth) {
    if (auth) {
      req.session.destroy(err => {
        if (err) { throw err }
        else { res.end(`[server    ] ${auth[0]}logout success...`) }
      })
    }
    else { res.end('[server    ] need login...') } 
  })

  // await middleware(req.session.userMail, function(rows) {
  //   console.log('auth :', rows);
  //   if (rows) {
  //     req.session.destroy(err => {
  //       if (err) { throw err }
  //       else { res.end(`[server    ] ${rows}logout success...`) }
  //     })
  //   }
  //   else { res.end('[server    ] need login...') }  
  // });




  // if (req.session.userMail) {
  //   req.session.destroy(function (err) {
  //     if (err) { throw err }
  //     else { res.end(`[server    ] logout success...`) }
  //   });
  // }
  // else { res.end('[server    ] need login...') }
}
