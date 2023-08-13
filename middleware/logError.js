const logError = (error, req, res, next) => {
    console.log(error);
    next(error);
}

const handleError = (error, req, res, next) =>{
    console.log("va segundo") 
    res.status(404).json({
        message: error.message,
        stack: error.stack
    });
} 

const boonHandleError = (error, req, res, next) =>{
    if (error.isBoon){
        const {output} = error;
        res.status(output.statusCode).json(output.payload)
        return;        
    }
    next(error);
}

module.exports = {logError,handleError, boonHandleError}
