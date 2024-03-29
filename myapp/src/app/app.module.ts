import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppLayoutModule } from './layout/app.layout.module';
// import { MessagesDemoModule } from './components/uikit/messages/messagesdemo.module';
// import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    AppLayoutModule
    // MessagesDemoModule,
    // ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
