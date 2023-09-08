import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
