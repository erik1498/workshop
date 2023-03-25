const express =  require("express")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("OKE")
})

app.post("/", (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log("Running 3000")
})