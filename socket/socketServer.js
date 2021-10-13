import fs from 'fs'
let io = null

export const startSocketIO = (server) => {
  io = require('socket.io').listen(server)

  const events = fs
    .readdirSync('./socket/events')
    .map((x) => x.split('Event.js')[0])

  io.on('connection', async (socket) => {
    events.forEach((event) => {
      socket.on(event, (data) =>
        require(`./events/${event}Event`).default(data, socket, io)
      )
    })
  })
}

export const getIO = () => io
