// Place where Routes are built

import { Injectable } from '@nestjs/common';

// we call async functions because the database is going to be used

@Injectable()
export class AppService {
  async addUser(body: object) {
    console.log('Body received', body);
    return { body };
  }

  async getUsers() {
    return {};
  }
}
