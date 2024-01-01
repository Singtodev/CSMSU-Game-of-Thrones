import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public faLock = faLock;
}
