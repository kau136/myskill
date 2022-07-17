const Form = require("../models/form.models");

exports.postFormData = async (req, res, next) => {
  const { name, email, username, phone, password } = req.body;
  try {
    const user = new Form({
      name: name,
      email: email,
      username: username,
      phone: phone,
      password: password,
    });
    await user.save();
    console.log('saved successfully')
    return res
      .status(200)
      .json({ message: "user saved successfully", data: user });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: err });
  }
};
