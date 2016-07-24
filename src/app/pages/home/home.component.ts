import { Component, OnInit} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import {GitService} from '../../services/gitService'
import {GitUser}  from '../../shared/gitUser'
import {Repository, Owner}  from '../../shared/gitRepo'
type ILanguage = [string, string, boolean];
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [GitService]
})
export class HomeComponent implements OnInit {
  languages: Array<ILanguage> = [
    ["All", "", false],
    ["Typescript", "typescript", true],
    ["Angular 2", "html", false],
    ["C#", "c#", false],
    ["Javascript", "javascript", false]
  ]
  sub: Observable<Array<Repository>>;
  gitRepositories: Array<Repository>;
  _gitRepositories: Array<Repository>;
  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.sub = this.gitService.getGitRepositories("thakurarun");
    this.sub.subscribe((repos) => {
      this._gitRepositories = repos;
      this.filterAndSortByLatestRepositories(this.languages.filter(x => x[2])[0]);
    });
  }
  filterAndSortByLatestRepositories(repositoryLanguage: ILanguage) {
    this.gitRepositories = this.sortRepositories(this._gitRepositories.filter(x => x.language.toLowerCase().indexOf(repositoryLanguage[1]) > -1));
    this.languages.map(x => { x[2] = false; return true; })
    repositoryLanguage[2] = true;
  }
  sortRepositories(repos: Array<Repository>) {
    repos.sort((b, a) => {
      return a.updated_at < b.updated_at ? -1 : a.updated_at == b.updated_at ? 0 : 1;
    });
    return repos;
  }
}
