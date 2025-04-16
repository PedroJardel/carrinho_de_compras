import {Router} from 'express';
const cartRouter = Router();

cartRouter.get('/', (req, res) => {
    res.send('Carrinho');

    // TODO: implementar funcionalidade de listar todos os carrinhos
});

cartRouter.get('/:id', (req, res) => {
    res.send('Lista apenas um ´produto');

    // TODO: implementar funcionalidade de listar um carrinho específico
});

cartRouter.post('/create', (req, res) => {
    res.send('Cria um produto');

    // TODO: implementar funcionalidade de criar um carrinho
});

export default cartRouter