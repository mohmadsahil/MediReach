export const catchAsynchErrors = (newFunction)=>{
    return(req,res,next) =>{
        Promise.resolve(newFunction(req,res,next)).catch(next);
    };
};