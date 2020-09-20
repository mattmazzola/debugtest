import debug from 'debug'
import dotenv from 'dotenv'

dotenv.config()

console.log(`DEBUG=${process.env.DEBUG}`)

const debugInfo = debug('info')
debugInfo('Expect this to be logged')

const debugInfoReload = (debug as any)('reload', { reloadEnv: true })
debugInfoReload('Reloaded environment variables. Expect this to be logged')
