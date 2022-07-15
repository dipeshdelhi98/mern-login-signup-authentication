const Users = require("../models/Users");
const {
  createUserValidation,
  loginValidation,
} = require("../utils/userValidations");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "secretkey123";

module.exports = {
  create: async (req, res) => {
    try {
      const { value, error } = createUserValidation(req.body);

      if (error) {
    
        return res.status(404).send({message:error.details[0].message});
      }

      if (req.body.password !== req.body.confirmpassword) {
        return res.status(404).send({
          message: "Password does not match with confirm password",
        });
      }

      const user = await Users.create(req.body);

      return res.send({
        message: "User Registered Successfully",
        data: user,
      });
    } catch (error) {
      if (error.code === 11000) {
        const message = Object.keys(error.keyPattern)[0];

        return res.status(404).send({
          message: `User Already Registered with this ${message} `,
        });
      }
      return res.status(404).send({
        message: error.message,
      });
    }
  },

  login: async (req, res) => {
    try {


      const { value, error } = loginValidation(req.body);

      if (error) {
        return res.status(404).send({ message: error.details[0].message });
      }

      const user = await Users.findOne({
        email: req.body.email,
      });

      if(!user){
        return res.status(404).send({ message: "Invalid Credentials" });
    }

      const comparePassword = bcrypt.compareSync(
        
        req.body.password,
        user.password
      );

   

      if (comparePassword === false) {
        return res.status(404).send({
          message: "Password is incorrect",
        });
      }

      const token = jwt.sign(
        { user_id: user._id, email:user.email },
        secretKey,
        {
          expiresIn: "2h",
        }
      )

      return res.status(200).send({
        status: "Success",
        message: "User Logged In Successfully",
        data: user,
        token:token
      });
    } catch (error) {

   
      return res.status(404).send({
        message: error.message,
      });
    }
  },
};
