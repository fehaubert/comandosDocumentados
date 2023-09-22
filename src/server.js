// Importar o arquivo de configuração
const app = require('./app');
// Importar a porta do servidor
const PORT = app.get('port');

app.get('/api', (request, response) => {
    response.send('Retorno de Informações do banco de dados');
    console.log('Listar informações')
})

app.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações');
    console.log('Listar informações')
})

app.put('/api', (request, response) => {
    response.send('Método utilizado para editar informações');
    console.log('Listar informações')
})

app.delete('/api', (request, response) => {
    response.send('Método utilizado para deletar informações');
    console.log('Listar informações')
})

// Testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))