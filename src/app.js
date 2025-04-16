import express from 'express';
import procuctRouter from './routes/Products/routes.js'
import cartRouter from './routes/Carts/routes.js'

const app = express();
const port = 8080;

app.use(express.json())
app.use('/products', procuctRouter);
app.use('/carts', cartRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })