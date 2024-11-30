import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string="Angular App  "
  h2:string="String Interpolation "
 
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
   
  
}
