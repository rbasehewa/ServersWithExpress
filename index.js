const express = require("express")
const app = express()

app.use((req, res) =>{
    console.log("we got a new request!")
    // res.send("HELLO, WE GOT YOUR REQUEST!")
    res.send('<h1>This is the request using node express </h1>')
})

app.listen(3000, () => {
    console.log("LISTENNING ON PORT 3000!")
})