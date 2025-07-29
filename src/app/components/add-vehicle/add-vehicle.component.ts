import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {
  vehicleForm: FormGroup;
  currentYear = new Date().getFullYear();
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    public router: Router
  ) {
    this.vehicleForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [null, [Validators.required, Validators.min(1900), Validators.max(this.currentYear)]],
      vin: ['', [Validators.required, Validators.pattern(/^.{17}$/)]],
      licensePlate: ['', Validators.required],
    });
  }

  get f() { return this.vehicleForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.vehicleForm.invalid) {
      return;
    }
    const vehicle: Vehicle = this.vehicleForm.value;
    this.vehicleService.addVehicle(vehicle);
    this.router.navigate(['/']);
  }
}
