import express from 'express';
import database from './database/database';
import authRoutes from './routes/authRoutes';

export class App {
  private express: express.Application;
  private PORT = process.env.PORT || 3000;

  constructor() {
    this.express = express();
    this.database();
    this.middleware();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private database(): void {
    database.connection();
  }

  private middleware(): void {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use('/auth', authRoutes);
  }

  private listen(): void {
    this.express.listen(this.PORT, () => {
      console.log(`Servidor rodando na porta ${this.PORT}`);
    });
  }
}