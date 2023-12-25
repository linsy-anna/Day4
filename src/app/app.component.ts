import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { DistrictComponent } from './pages/district/district.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SimpleComponent } from './pages/simple/simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,DistrictComponent,ContactComponent,SimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day4';
}
