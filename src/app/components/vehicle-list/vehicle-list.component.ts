import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

  goToAddVehicle() {
    this.router.navigate(['/add-vehicle']);
  }
}
