import { UserInterface } from './../../interfaces/UserInterface';

export class AuthControllerFilter {
  public static async registerFilter(body: any): Promise<UserInterface> {
    const data = {
      email: body.email || null,
      password: body.password || null,
    }
    
    return data;
  }
}