const AsyncHandler = (Handlerfunc) => {
    (req,res,next) => {
        Promise.resolve(Handlerfunc(req,res,next))
        .catch( (error) => next(error) );
    }
} 

export {AsyncHandler}