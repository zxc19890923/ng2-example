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
// 获取路由传递传递过来的params(id) 增加模块激活的路由(ActivatedRoute)
var router_1 = require("@angular/router");
var AboutInfoComponent = (function () {
    // 初始化变量
    function AboutInfoComponent(route) {
        this.route = route;
        this.id = 0;
    }
    // 方法中操作id, 通过id查询信息等等
    AboutInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params); //{ id : "xx" }
            _this.id = params.id;
        });
    };
    AboutInfoComponent = __decorate([
        core_1.Component({
            selector: "my-info",
            templateUrl: "../templates/about-info.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutInfoComponent);
    return AboutInfoComponent;
}());
exports.AboutInfoComponent = AboutInfoComponent;
//# sourceMappingURL=about-info.component.js.map