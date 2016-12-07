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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var AboutComponent = (function () {
    // 初始化变量http 必须定义为public
    function AboutComponent(http) {
        this.http = http;
    }
    // 挂在完毕加载数据
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../data/user.json')
            .subscribe(function (res) {
            _this.data = res.json();
            console.log(res.json());
        });
    };
    // 单机表格行,可传递过来信息
    AboutComponent.prototype.showInfo = function (id) {
        // alert(id);
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "my-about",
            templateUrl: "../templates/about.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map