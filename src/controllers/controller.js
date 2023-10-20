function listarDados(request, response) {
    response.send('Retorno de Informações do banco de dados');
    console.log('get')
}

module.exports = {
    listarDados
}
