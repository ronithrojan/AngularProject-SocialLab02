import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfilecompComponent } from "./profilecomp/profilecomp.component";
import { EditcompComponent } from "./editcomp/editcomp.component";

const routes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "profile", component: ProfilecompComponent },
  { path: "edit-profile", component: EditcompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
