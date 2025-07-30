import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  
  constructor(private vehicleService: VehicleService, private router: Router) {
    this.vehicles$ = this.vehicleService.getVehicles();
  }

  ngOnInit() {
    // Inicialização já feita no construtor
  }

  goToAddVehicle() {
    this.router.navigate(['/add-vehicle']);
  }
}
