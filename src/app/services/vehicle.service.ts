import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private readonly STORAGE_KEY = 'vehicles';
  private vehiclesSubject = new BehaviorSubject<Vehicle[]>([]);
  public vehicles$ = this.vehiclesSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      const vehicles = stored ? JSON.parse(stored) : [];
      this.vehiclesSubject.next(vehicles);
    } catch (error) {
      console.error('Erro ao carregar veículos:', error);
      this.vehiclesSubject.next([]);
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.vehiclesSubject.value));
    } catch (error) {
      console.error('Erro ao salvar veículos:', error);
    }
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicles$;
  }

  addVehicle(vehicle: Vehicle): void {
    const currentVehicles = this.vehiclesSubject.value;
    this.vehiclesSubject.next([...currentVehicles, vehicle]);
    this.saveToStorage();
  }
}
