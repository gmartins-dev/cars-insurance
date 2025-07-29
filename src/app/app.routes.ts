import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';

export const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
];
