const express =  require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin:"*"
}))
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"kulkas"
});
con.connect()

app.get("/", (req, res) => {
    console.log("Get Data")
    con.query("SELECT * FROM laci_status ORDER BY id DESC", (err, result) => {
        if (err) {
            throw err
        }
        res.send({
            code:200,
            data:result
        })
    })
})

app.post("/", (req, res) => {
    con.query("INSERT INTO `laci_status` (`id`, `nama`, `waktu`, `text`) VALUES (NULL, '"+req.body.nama+"', '"+req.body.waktu+"', '"+req.body.text+"');", (err, result) => {
        if (err) {
            throw err
        }
        console.log("1 Record Success")
        res.send({
            code:200,
            data:"Success"
        })
    })
})

app.listen(3000, () => {
    console.log("Running 3000")
})