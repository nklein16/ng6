import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor contains dependency injection
  constructor(private http: HttpClient) { }

  // custom method
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }
  
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
