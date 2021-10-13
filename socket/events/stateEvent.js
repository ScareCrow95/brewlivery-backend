import { clientMap } from '../clientMap'
import { onDeliver, orderQueue } from '../server-events/onDeliver'
import { getIO } from '../socketServer'
export default async ({ state, id }) => {
  const dr = clientMap.drones.get(id)
  if (dr) {
    dr.state = state
    if (state === 'transit-to') {
      getIO()
        .to(dr.client)
        .emit('order.status', { state: 'shipped', orderId: dr.orderId })
    } else if (state === 'transit-await') {
      getIO()
        .to(dr.client)
        .emit('order.status', { state: 'delivered', orderId: dr.orderId })
    } else if (state === 'transit-delivered') {
      getIO()
        .to(dr.client)
        .emit('order.status', { state: 'received', orderId: dr.orderId })
    } else if (state === 'idle') {
      dr.client = null
      dr.orderId = null
      dr.lat = null
      dr.lng = null
      if (orderQueue.length > 0) {
        console.log('pulling order from queue')
        setTimeout(() => {
          onDeliver(orderQueue.shift())
        }, 2)
      }
    }
  }
}
