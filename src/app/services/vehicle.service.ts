import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }
}
