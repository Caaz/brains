import http from 'node:http'
import express from 'express'
import {Server} from 'socket.io'
import webpack from 'webpack';
import path from 'path'

const app = express()
const server = http.createServer(app)
const io = new Server(server)


webpack({
	entry:'./frontend/js/main.js',
	output: {
		path:path.resolve('frontend'), // string (default)
		filename:"bundle.js"
	},
}, (err, stats) => { // [Stats Object](#stats-object)
	if (err)
		console.error(err)
  if (stats && stats.hasErrors())
		console.error(stats.compilation.errors)
	console.log("Did it?")
  // Done processing
})

// Serve the frontend files
app.use(express.static('frontend'))

// Handle new connections to our socket!
io.on('connection', () => {
	// Handle new players here
	console.log('a user connected')
})

// Listen at a port
server.listen(3000, () => {
	console.log('listening on *:3000')
})
