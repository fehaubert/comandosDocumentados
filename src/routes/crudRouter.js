// Importar pacote do express
const { Router }      = require("express");
// Instanciar o Router na variável router
const router          = Router();
// Importar funções do controller para a rota acessar
const { 
    listarDados,
    gravarDados,
    atualizarDdados,
    deletarDados
 } = require('../controllers/controller');

router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDdados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
