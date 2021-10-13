import { clientMap } from '../clientMap'
import { getIO } from '../socketServer'

export default async ({ status, id }) => {
  const dr = clientMap.drones.get(id)
  if (dr) {
    dr.status = status
    if (dr.state === 'transit-to') {
      getIO()
        .to(dr.client)
        .emit('drone.status', { status, orderId: dr.orderId })
    }
  }
}
