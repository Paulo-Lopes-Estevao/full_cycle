const express = require('express')
const app = express()
const port = 5000

const config = {
    host: 'mariadb',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
let connection = mysql.createConnection(config)

const createTableQuery = 'CREATE TABLE IF NOT EXISTS people (id int(11) NOT NULL AUTO_INCREMENT,name varchar(80) NOT NULL, primary key(id))'

connection.query(createTableQuery)
connection.end()

const names = [
    'Fellipe Garcias',
    'Camila Lima',
    'Wesley Williams',
]


app.get('/', (req, res) => {

    connection = mysql.createConnection(config)
    
    const randomIndex = Math.floor(Math.random() * names.length);

    connection.query(`INSERT INTO people(name) VALUES ("${names[randomIndex]}")`, (err, result) => {
        if (err) console.log(err)
    })

    const defaultResponse = '<h1>Full Cycle Rocks</h1>'

    connection.query("SELECT name FROM people ORDER BY name ASC", (err, result) => {

        if (err) console.log(err)
        result = Object.values(JSON.parse(JSON.stringify(result))).map((row) => `* ${row.name}`)

        const htmlResponse = [defaultResponse, ...result].join('<br />')
        res.send(htmlResponse)

    })


    connection.end()
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})