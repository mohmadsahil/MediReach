function createError(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;   
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = createError(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
        const message = "Json Web Token is Invalid, Try Again!";
        err = createError(message, 400);
    }
    if (err.name === "TokenExpiredError") {
        const message = "Json Web Token is Expired, Try Again!";
        err = createError(message, 400);
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = createError(message, 400);
    }

    const errorMsg = err.errors ? Object.values(err.errors).map(error => error.message).join(" And ") : err.message;

    return res.status(err.statusCode).json({
        success: false,
        message: errorMsg,
    });
};

export default createError;