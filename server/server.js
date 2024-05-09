import express from 'express'
import ViteExpress from 'vite-express'

const app = express()
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ENDPOINTS GO HERE
app.get('/', (req, res) => {
    res.sendFile("src/index.html", {root: '.'})
})

app.post('/order-cookies', (req, res) => {
    const {quantity, cookieType} = req.body

    res.status(200).send({
        message: `Order of ${quantity} ${cookieType} confirmed!`,
        total: quantity * 1.50
    })
})


ViteExpress.listen(app, 2319, () => console.log('Server running at http://localhost:2319'))