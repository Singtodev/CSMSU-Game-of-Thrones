import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ RouterOutlet , HeaderComponent , FontAwesomeModule , RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  faHearth = faHeart;
  constructor(
    private readonly router: Router
  ){

  }

  ngOnInit(): void {
      
  }

}
