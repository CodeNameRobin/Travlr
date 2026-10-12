import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [CommonModule, RouterOutlet, TripListing],
  imports: [CommonModule, RouterOutlet, TripListing],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Travlr Getaways Admin!';
}
