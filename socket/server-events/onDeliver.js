import { getIO } from '../socketServer'
import sleep from '../../utils/sleep'
import { clientMap } from '../clientMap'

export const orderQueue = []

export const onDeliver = async ({ lat, lng, id, orderId }) => {
  await sleep(2000)
  console.log('place order')

  const dr = Array.from(clientMap.drones.values()).find(
    (x) => x.state === 'idle'
  )

  if (dr) {
    getIO().to(dr.id).emit('deliver', { lat, lon: lng })
    dr.state = 'transit-to'
    dr.client = id
    dr.lat = lat
    dr.lng = lng
    dr.orderId = orderId
  } else {
    orderQueue.push({ lat, lng, id, orderId })
  }
}
