import { verify } from 'jsonwebtoken'
import handleError from '../api/handleError'

export default (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Authorization')
  try {
    if (!req.get('Authorization')) throw new Error('1002')
    const token = req.get('Authorization').split(' ')[1]
    let decoded
    try {
      decoded = verify(token, Buffer.from(process.env.JWT, 'base64'))
    } catch (err) {
      throw new Error('1001')
    }
    req.body._id = decoded._id
    req._id = decoded._id
    next()
  } catch (err) {
    handleError(err, res)
  }
}
