import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfilecompComponent } from "./profilecomp/profilecomp.component";
import { EditcompComponent } from "./editcomp/editcomp.component";

@NgModule({
  declarations: [AppComponent, ProfilecompComponent, EditcompComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
