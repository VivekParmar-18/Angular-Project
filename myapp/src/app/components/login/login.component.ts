import { Component } from '@angular/core';
import { Router } from '@angular/router';   
import { AuthenticationService } from '../../authentication.service';
import { MessagesDemoComponent } from '../uikit/messages/messagesdemo.component';
import { Message, MessageService } from 'primeng/api';

// import { Password } from 'primeng/password';
// import { LayoutService } from '../../layout/service/app.layout.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
          }
          `],
          providers: [MessageService]
})
export class LoginComponent {
  msgs: Message[] = [];
   
    constructor(private authService: AuthenticationService,  private router: Router ,private service: MessageService) {}

    valCheck: string[] = ['remember'];
    // email!: string;
    // rememberMe1!:boolean;
    // password!: string;
    
    formData = {
        email: '',
        password: '',
       
      };
      checkbox={
        rememberMe: false
      };
      validate() {
       
        console.log(this.formData)
        console.log(this.checkbox);
        this.authService.login(this.formData.email,this.formData.password).subscribe(
          (response) => {
            // Handle successful login response from backend
            this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Login Successfully' });
            console.log(response);
            this.router.navigate(['/dashboard']);

          },
          (error) => {
            // Handle error 
            this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Invalid Credentials' });
            console.error(error);
            //clear inpuit feilds
            this.formData.email = '';
            this.formData.password = '';
          }
        );
      }
}
