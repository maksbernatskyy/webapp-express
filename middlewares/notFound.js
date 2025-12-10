function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: 'Not found',
        message: 'Movie not found'
    })
}

module.exports = notFound