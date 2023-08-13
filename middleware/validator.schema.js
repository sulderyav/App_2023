const validatorSchema = (schema, params) =>{
    return (req, res, next)=>{
        const data= req[params];
        const {error} = schema.validate(data);
        if(error){
            next(error);   
        }else{
            next();
        }
    }
}

module.exports = {validatorSchema};
