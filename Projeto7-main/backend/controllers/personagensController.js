const db = require('../db')
exports.createPersonagem = async (req, res) =>{
    console.log(req.body)
    console.log(req.file)
    const {nome, texto} = req.body
    const foto = req.file.path
    try{
        const [result] = await db.query('INSERT INTO personagens (nome, texto, foto) VALUES (?, ?, ?', [nome, texto, foto])
        res.status(201).send(`Personagem criado com ID: ${result.insertId}`)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getAllPersonagem = async (req, res) =>{
    try{ const [personagens] = await db.query('SELECT * FROM personagens')
        res.status(200).json(personagens)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getPersonagemById = async (req, res) =>{
    const id = req.params.id
    try{
        const [personagem] = await db.query('SELECT * FROM personagens WHERE id = ?', [id])
        if (personagens.length > 0){
            res.status(200).json(personagem[0])
        } else {
            res.status(404).send('Personagem não encontrado')
        }
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}
// exports.updatePersonagem = async (req, res) =>{

// }
exports.deletePersonagem = async (req, res) =>{
    const id = req.params.id
    try{
        const [result] = await db.query('DELETE FROM personagens WHERE id = ?', [id])
        if (result.affectedRows > 0){
            res.status(200).send('Personagem deletado com sucesso')
        } else {
            res.status(404).send('Personagem não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}