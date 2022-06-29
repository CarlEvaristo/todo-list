import express from "express"
import bodyParser from "body-parser"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use("/", express.static(__dirname))
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs")

let listItems = []

app.get('/', (req, res) => {
    res.render('index', {items: listItems});   
})

app.post("/", (req,res)=>{ 	
    listItems.push(req.body.item)		  
    res.redirect("/");				
})

app.listen(3000)