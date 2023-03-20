import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import contractRoutes from '../contracts/contractRoutes';

const app = new Koa();
// Koa apps use middleware, this is you using it 👇
app.use(bodyParser());
app.use(contractRoutes.routes());
app.use(contractRoutes.allowedMethods()); 
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
