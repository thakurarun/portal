import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {GitUser}  from '../shared/gitUser'
import {Repository, Owner}  from '../shared/gitRepo'
@Injectable()
export class GitService {
    constructor(private http: Http) { }
    getGitUser(username: string): Observable<GitUser> {
        return this.http.get("https://api.github.com/users/thakurarun")
            .map((response: Response) => {
                let user: GitUser = response.json();
                return user;
            });
    }
    getGitRepositories(username: string): Observable<Array<Repository>> {
        return this.http.get("https://api.github.com/users/thakurarun/repos")
            .map((response: Response) => {
                let repos: Array<Repository> = response.json();
                return repos.filter(x=> !!x.language);
            });
    }
}
