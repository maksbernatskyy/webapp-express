function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: 'Error'
    })
}

module.exports = errorsHandler