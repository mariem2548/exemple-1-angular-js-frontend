import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "localhost:8080/api/v1/users";
  constructor(private httpClient: HttpClient) { }
  getUsersList(): Observable<User[]>{
  return this.httpClient.get<User[]>('${this.baseURL}');
}
createUser(user: User): Observable<object>{
  return this.httpClient.post('${this.baseURL}', user);
}
getUserById(userId: number): Observable<User>{
  return this.httpClient.get<User>('${this.baseURL}/${userId}');
}
updateUser(userId: number, user: User): Observable<object>{
  return this.httpClient.put('${this.baseURL}/${userId}', user);
}
deleteUser(userId: number): Observable<object>{
  return this.httpClient.delete('${this.basrURL}/${id}');
}
}