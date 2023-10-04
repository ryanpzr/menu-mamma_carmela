const express = require('express');
const mysql = require('mysql2/promise')
const db = require('./database');

const server = express();
server.use(express.json());

server.get("/info", async (req, res) => {

    try {
        const connection = await db.getConnection();
        const [rows] = await connection.execute('SELECT * FROM informations')
        connection.release();
        res.json(rows)

    } catch (err) {
        console.error('Erro ao buscar dados no banco de dados:', err);
        res.status(500).send('Erro ao buscar dados no banco de dados');
    }

})

server.post("/add", async (req, res) => {
    const { nome, idade, cidade } = req.body;

    try {
        const connection = await db.getConnection();
        await connection.execute('INSERT INTO informations (nome, idade, cidade) VALUES (?, ?, ?)', [nome, idade, cidade])
        connection.release();

        res.json({ message: 'Dados inseridos com sucesso!' })

    } catch (err) {
        console.error('Erro ao Inserir dados no banco de dados:', err);
        res.status(500).send('Erro ao Inserir dados no banco de dados');
    }

})

server.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await db.getConnection();
        await connection.execute('DELETE FROM informations WHERE id = ?', [id])
        connection.release();

        res.send({ message: 'Dados deletados com sucesso!' })
    } catch (err) {
        console.error('Erro ao deletar os dados do banco de dados:', err);
        res.status(500).send('Erro ao deletar os dados do banco de dados');
    }

});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor aberto na porta: ${PORT}`);
});