const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions))
app.use(express.json({extended: true}))
app.use('/api/json', require('./routes/json.route'))

async function start() {
    try {
        await mongoose.connect(
        "mongodb+srv://admin:Zh042001@cluster0.hco1q.mongodb.net/testCase?retryWrites=true&w=majority", {
        })

        app.listen(PORT, () => {
            console.log('Server started on port ' + PORT)
        })
    } catch (err) {
        console.error(err)
    }
}

start()
