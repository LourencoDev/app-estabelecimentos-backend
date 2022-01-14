"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class AppError {
  
  

  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
} exports.AppError = AppError;