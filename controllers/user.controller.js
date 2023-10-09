exports.signup = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Form can not be empty",
    });
  }
  res.status(200).send(true);
};
