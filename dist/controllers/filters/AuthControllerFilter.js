"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 class AuthControllerFilter {
   static async registerFilter(body) {
    const data = {
      email: body.email || null,
      password: body.password || null,
    }
    
    return data;
  }
} exports.AuthControllerFilter = AuthControllerFilter;