import { clientMap } from '../clientMap'
import { getIO } from '../socketServer'
export default async (data, socket) => {
  const dr = clientMap.drones.get(data.id)
  if (dr)
    getIO()
      .to(dr.client)
      .emit('gps', { ...data, orderId: dr.orderId })
}
