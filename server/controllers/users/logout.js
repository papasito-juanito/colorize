module.exports = function (req, res) {
  if (req.session.userMail) {
    req.session.destroy(function (err) {
      if (err) { throw err }
      else { res.end(`[server    ] logout success...`) }
    });
  }
  else { res.end('[server    ] need login...') }
}
