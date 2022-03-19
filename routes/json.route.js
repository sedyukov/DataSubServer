const {Router} = require('express')
const router = Router()
const Payment = require('../models/Payment')

router.post('/add', async (req, res) => {
    try {
        const json = req.body
        json.CardNumber = Number(json.CardNumber)
        const payment = await new Payment({
            json
        })

        await payment.save()
        const answer = {
            RequestId: payment.id,
            Amount: json.Amount
        }
        res.json(answer)
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router


