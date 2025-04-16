import { Router } from 'express';
const procuctRouter = Router();

procuctRouter.get('/', (req, res) => {
    res.send('Lista todos os produtos');

    // TODO: implementar funcionalidade de listar todos os produtos
});

procuctRouter.get('/:id', (req, res) => {
    res.send('Lista apenas um ´produto');

    // TODO: implementar funcionalidade de busca por um produto
});

procuctRouter.post('/create', (req, res) => {
    res.send('Cria um produto');

    // TODO: implementar funcionalidade de criação de produto
});

procuctRouter.put('/:id', (req, res) => {
    res.send('Altera um produto');

    // TODO: implementar funcionalidade de alteração de produto
});

procuctRouter.delete('/:id', (req, res) => {
    res.send('Exclui um produto');

    // TODO: implementar funcionalidade de exclusão de produto
});

export default procuctRouter