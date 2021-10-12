import { Router } from 'express'
import iotGet from '../../services/iot/iotGet'

import handleRequest from '../handleRequest'

const router = Router()

router.get('/get', (req, res) => {
  handleRequest(req, res, iotGet)
})

export default router
