// server/middleware/socket.ts
import type { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'socket.io'

let server: any = null

export default (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    // @ts-expect-error: Nuxt3
    server = res.socket?.server
    const io = new Server(server);

    io.on('connection', (socket) => {
      console.log('Made socket connection');

      socket.on('msg', (msg) => {
        console.log('Recived: ' + msg)

        setTimeout(() => {
          socket.emit('msg', `Response to: ${msg}`)
        }, 1000)
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}