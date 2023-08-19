import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJson from './swagger.json';
import { UserRoute } from './routes/UserRoute';
import { AuthRoute } from './routes/AuthRoute';
import { StockRoute } from './routes/StockRoute';

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use('/user', UserRoute);

app.use('/auth', AuthRoute);

app.use('/stock', StockRoute);

app.listen(port, () => console.log(`API listening on port ${port}!`));
