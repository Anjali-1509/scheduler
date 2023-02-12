const express = require("express")
const app= express()
let cron = require("node-cron")

app.get("/", (req, res)=> {
    res.send("server is up and running")
})
cron.schedule("*/7 * * * * *", (textOne)=> {
    console.log(`running at ${textOne}`)
})

app.listen(3000, ()=> {
    console.log(`Server is running on port ${3000}`)
})