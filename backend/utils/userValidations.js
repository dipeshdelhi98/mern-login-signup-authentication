const Joi=require('joi')


const createUserValidation=(body)=>{

    const schema = Joi.object().keys({ 
        username: Joi.string().required(),
        email: Joi.string().required(),
        password:Joi.string().required(),
        confirmpassword:Joi.string().required(),
      }); 
     
      const result = schema.validate(body)

      return result
}

const loginValidation=(body)=>{
    const schema = Joi.object().keys({ 
     
        email: Joi.string().required(),
        password:Joi.string().required(),
       
      }); 
     
      const result = schema.validate(body)

      return result

}

module.exports={
    createUserValidation,
    loginValidation
}