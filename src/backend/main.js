import http from 'node:http'
import express from 'express'
import {Server} from 'socket.io'
const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Serve the frontend files
app.use(express.static('src/frontend'))

// Handle new connections to our socket!
io.on('connection', () => {
	// Handle new players here
	console.log('a user connected')
})

// Listen at a port
server.listen(3000, () => {
	console.log('listening on *:3000')
})
