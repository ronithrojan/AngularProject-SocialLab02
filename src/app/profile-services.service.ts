import { Injectable } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileServicesService {
  userProfile: UserProfile = {
    name: "Roniya Rojan",
    contact: "It me",
    bio: "I am Indian"
  };
  constructor() {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(profileObject: UserProfile) {
    this.userProfile = profileObject;
  }
}
