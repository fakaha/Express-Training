const logRequest = (req, res, next) => {
    console.log(`log request path ${req.path}`);
    next()
}

module.exports = logRequest