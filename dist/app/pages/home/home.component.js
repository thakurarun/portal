"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gitService_1 = require('../../services/gitService');
var HomeComponent = (function () {
    function HomeComponent(gitService) {
        this.gitService = gitService;
        this.languages = [
            ["All", "", false],
            ["Typescript", "typescript", true],
            ["Angular 2", "html", false],
            ["C#", "c#", false],
            ["Javascript", "javascript", false]
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.gitService.getGitRepositories("thakurarun");
        this.sub.subscribe(function (repos) {
            _this._gitRepositories = repos;
            _this.filterAndSortByLatestRepositories(_this.languages.filter(function (x) { return x[2]; })[0]);
        });
    };
    HomeComponent.prototype.filterAndSortByLatestRepositories = function (repositoryLanguage) {
        this.gitRepositories = this.sortRepositories(this._gitRepositories.filter(function (x) { return x.language.toLowerCase().indexOf(repositoryLanguage[1]) > -1; }));
        this.languages.map(function (x) { x[2] = false; return true; });
        repositoryLanguage[2] = true;
    };
    HomeComponent.prototype.sortRepositories = function (repos) {
        repos.sort(function (b, a) {
            return a.updated_at < b.updated_at ? -1 : a.updated_at == b.updated_at ? 0 : 1;
        });
        return repos;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [gitService_1.GitService]
        }), 
        __metadata('design:paramtypes', [gitService_1.GitService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map