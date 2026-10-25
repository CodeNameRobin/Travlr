import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripListing } from './trip-listing/trip-listing';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [CommonModule, RouterOutlet, TripListing],
  imports: [CommonModule, RouterOutlet, Navbar],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Travlr Getaways Admin!';
}
