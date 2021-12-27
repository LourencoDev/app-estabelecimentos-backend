import express from 'express';
import establishimentRoutes from './routes/establishimentRoutes';
// import cors from 'cors';

export class App {
  private express: express.Application;
  private PORT = process.env.PORT || 3000;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middleware(): void {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
    // this.express.use(cors());
  }

  private routes(): void {
    this.express.use('/', establishimentRoutes);
  }

  private listen(): void {
    this.express.listen(this.PORT, () => {
      console.log(`Servidor rodando na porta ${this.PORT}`);
    });
  }
}