import { clientMap } from '../clientMap'
export default async ({ type, id }, socket) => {
  socket.join(type)
  if (type === 'drone') {
    clientMap.drones.set(id, {
      state: 'init',
      client: null,
      id: id,
    })
  } else if (type === 'client') {
    clientMap.clients.set(id, { drone: null })
  }
  socket.join(id)
  console.log('joined room: ' + type)
}
