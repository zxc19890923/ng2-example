import {Component} from "@angular/core";

@Component ({
    selector: "my-register",
    templateUrl: "../templates/register.html"
})

export class RegisterComponent {
    registerSubmit() {
        alert("注册成功");
    }
}