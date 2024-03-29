import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastModule } from 'primeng/toast';
import { MessagesDemoModule } from '../uikit/messages/messagesdemo.module';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from '../../layout/config/config.module';



@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        HttpClientModule,
        MessagesDemoModule,
        RippleModule,
        AppConfigModule
        // ToastModule,
    ],
    declarations: [LoginComponent],
    exports:[MessagesDemoModule]
})
export class LoginModule { }

