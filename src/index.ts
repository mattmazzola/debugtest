import debug from 'debug'
import dotenv from 'dotenv'

dotenv.config()

console.log(`DEBUG=${process.env.DEBUG}`)

const debugInfo = debug('info')
debugInfo('Expect this to be logged')
