import { Component, OnInit } from "@angular/core";
import { ProfileServicesService } from "../profile-services.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-editcomp",
  templateUrl: "./editcomp.component.html",
  styleUrls: ["./editcomp.component.css"]
})
export class EditcompComponent implements OnInit {
  constructor(
    private service: ProfileServicesService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {}

  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.routerInstance.navigate(["profile"]);
  }
}
