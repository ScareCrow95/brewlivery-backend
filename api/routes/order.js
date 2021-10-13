import { Router } from 'express'
import placeOrder from '../../services/order/placeOrder'

import handleRequest from '../handleRequest'

const router = Router()

router.post('/place', (req, res) => {
  handleRequest(req, res, placeOrder)
})

export default router
