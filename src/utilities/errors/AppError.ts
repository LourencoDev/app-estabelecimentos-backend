export class AppError {
  private readonly statusCode: number;
  private readonly message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}