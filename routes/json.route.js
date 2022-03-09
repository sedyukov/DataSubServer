const {Router} = require('express')
const router = Router()
const MoexAPI = require("moex-api");
const moexApi = new MoexAPI();

router.post('/add', async (req, res) => {
    try {
        const json = req.body
        await moexApi.securityMarketData("USD000UTSTOM").then((security) => {
            console.log(security.node.last); // e.g. 64.04
            json.forEach(el => el.val = Number(el.val) + Number(security.node.last))
        });
        res.json(json)
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router


