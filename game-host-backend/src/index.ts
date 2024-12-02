import express from "express"
import http from "http"
import { Server } from "socket.io"

// Initialize Express app
const app = express()
const server = http.createServer(app)

// Initialize Socket.IO with the server
const io = new Server(server)

// Handle socket connections
io.on("connection", (socket) => {
  console.log("a user connected:", socket.id)

  // Emit an event to the connected client
  socket.emit("welcome", "Welcome to the server!")

  // Listen for a custom event from the client
  socket.on("message", (msg) => {
    console.log("Received message:", msg)
    socket.emit("response", `Server says: ${msg}`)
  })

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id)
  })
})

// Start the server on a specified port
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
