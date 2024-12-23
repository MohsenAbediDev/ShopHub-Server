const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/', router)

server.listen(process.env.PORT || 3000, () => {
	console.log('JSON Server is running')
})

// Ping the server every 5 minutes to keep it active
const PING_INTERVAL = 300000 // 5 minutes in milliseconds 
const SERVER_URL = 'https://shophub-server-snf8.onrender.com/products'

setInterval(() => {
	fetch(SERVER_URL)
		.then((res) => {
			if (!res.ok) {
				throw new Error(`Failed to ping server. Status: ${res.status}`)
			}
			console.log(`Ping successful at ${new Date().toISOString()}`)
		})
		.catch((err) => {
			console.error(`Ping failed: ${err.message}`)
		})
}, PING_INTERVAL)
