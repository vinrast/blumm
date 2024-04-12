import { errorHandler } from './middlewares/error-handler';
import { createServer, Server } from 'http';
import express, { Express } from 'express';
import { APP_CONFIG } from '../config';
import { bodyParser, cors, urlEncoded } from './middlewares';

export default class App {
  application: Express;
  private port: number;
  private baseUrl: string;
  private server: Server;

  constructor() {
    this.port = APP_CONFIG.SERVER_PORT;
    this.baseUrl = '/api';
    this.application = express();
    this.server = createServer(this.application);
    this.beforeMiddlewares();
    this.routes();
    this.afterMiddlewares();
  }

  beforeMiddlewares() {
    this.application.use(bodyParser);
    this.application.use(cors);
    this.application.use(urlEncoded);
  }

  afterMiddlewares() {
    this.application.use(errorHandler);
  }

  routes() {
    this.application.use(`${this.baseUrl}`, (req, res) => res.json({ message: 'Hello World!' }));
  }

  create() {
    this.server.listen(this.port, () =>
      console.log(`servidor online na porta: ${this.port}`)
    );
  }
}
