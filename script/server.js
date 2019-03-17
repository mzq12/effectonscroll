const liveServer = require('live-server')
const params = {
    port: 8080,
    host: '0.0.0.0',
    root: './dist',
    watch: ['dist/**', 'demo/**'],
    open: true,
    mount: [
        ['/dist', './dist']
    ],
    noCssInject: true
}
const server = liveServer.start(params)
module.exports = server