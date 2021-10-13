import { onDeliver } from '../../socket/server-events/onDeliver'

export default async ({ lat, lng, id, orderId }) => {
  onDeliver({ lat, lng, id, orderId })
  return 200
}
