"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentComponent = void 0;
var core_1 = require("@angular/core");
var dataFake_1 = require("../../data/dataFake");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(route) {
        this.route = route;
        this.photoCover = "";
        this.contentTitle = "";
        this.contentDescription = "";
        this.id = "0";
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (value) { return _this.id = value.get("id"); });
        this.setValuesToComponent(this.id);
    };
    ContentComponent.prototype.setValuesToComponent = function (id) {
        var result = dataFake_1.dataFake.filter(function (article) { return article.id == id; })[0];
        this.contentTitle = result.title;
        this.contentDescription = result.description;
        this.photoCover = result.photoCover;
    };
    ContentComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-content',
            templateUrl: './content.component.html',
            styleUrls: ['./content.component.css']
        })
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
