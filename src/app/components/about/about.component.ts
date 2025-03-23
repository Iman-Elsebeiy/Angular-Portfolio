import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  user = {
    name: 'Iman Madgy El Sayed ElSebaie',
    education: 'Faculty of Science, Ain Shams University',
    experience:'Full-Stack Developer | PHP, Laravel, WordPress, Angular',
    projects: 'Blog API (Express, Prisma, PostgreSQL), ChatGPT Clone (Laravel, Node.js)'
  };




}
