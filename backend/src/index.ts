import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJson from './swagger.json';
import { UserRoute } from './routes/UserRoute';

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

app.listen(port, () => console.log(`API listening on port ${port}!`));
