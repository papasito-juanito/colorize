module.exports = (req, res, next) => {
  res.status(200).send(req.session.user_id);
}
