import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileServicesService } from "../profile-services.service";

@Component({
  selector: "app-profilecomp",
  templateUrl: "./profilecomp.component.html",
  styleUrls: ["./profilecomp.component.css"]
})
export class ProfilecompComponent implements OnInit {
  userProfile: UserProfile;

  constructor(private service: ProfileServicesService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
