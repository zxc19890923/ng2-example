import {Component, OnInit} from "@angular/core";
// 获取路由传递传递过来的params(id) 增加模块激活的路由(ActivatedRoute)
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: "my-info",
    templateUrl: "../templates/about-info.html"
})

export class AboutInfoComponent implements OnInit {
    id:number;
    // 初始化变量
    constructor(public route:ActivatedRoute) {
        this.id = 0;
    }

    // 方法中操作id, 通过id查询信息等等
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params); //{ id : "xx" }
            this.id = params.id;
        });
    }
}