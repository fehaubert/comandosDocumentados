// Importar pacote do express
const { Router } = require("express");
// Instanciar o Router na variável router
const router = Router();

router.get('/api', (request, response) => {
    response.send('Retorno de Informações do banco de dados');
    console.log('get')
});

router.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações!');
    console.log('post');
    console.log(request.body);
});

router.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações!');
    console.log('put')
});

router.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações!');
    console.log('delete')
});

module.exports = router;
