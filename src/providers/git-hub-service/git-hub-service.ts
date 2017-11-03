import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { User } from '../../models/user.interface'
import { Repository} from '../../models/repository.interface'

import { USER_LIST } from '../../mocks/user.mocks'
import { REPOSITORY_LIST } from '../../mocks/repository.mocks'

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";


  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /*
    Finding the username from within the USER_LIST, equal to the username passed in.
    Returning the results as an Observable.
  */

  getUserInformation(userName : string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${userName}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  getRepositoryInformation(userName: string): Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${userName}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  private extractData(response : Response) {
    return response.json();
  }
  
  private logData(response : Response) {
    console.log(response);
  }
  
  private handleError(error : Response | any) {
    return Observable.throw(error.json().error || "Server Error.")
  }

  mockGetUserInformation(userName: string): Observable<User> {
    return Observable.of(USER_LIST.filter((user : User) =>  user.name.toLowerCase().search(userName.toLowerCase().trim()) !== -1)[0])
  }

  mockGetRepositoryInformation(userName: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter((repository : Repository) => repository.owner.name.toLowerCase().search(userName.toLowerCase().trim()) !== -1))
  }
}
