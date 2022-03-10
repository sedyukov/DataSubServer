const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions))
app.use(express.json({extended: true}))
app.use('/api/json', require('./routes/json.route'))
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
})

