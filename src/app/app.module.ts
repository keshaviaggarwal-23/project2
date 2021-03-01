import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModuleModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileDetails } from './data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    NgbModule
  ],
  providers: [ProfileDetails],
  bootstrap: [AppComponent],
})
export class AppModule {}
