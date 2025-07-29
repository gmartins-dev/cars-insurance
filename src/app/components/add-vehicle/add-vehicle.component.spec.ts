import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleComponent } from './add-vehicle.component';

describe('AddVehicleComponent', () => {
  let component: AddVehicleComponent;
  let fixture: ComponentFixture<AddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve ser inválido se campos obrigatórios estiverem vazios', () => {
    component.vehicleForm.setValue({ make: '', model: '', year: null, vin: '', licensePlate: '' });
    expect(component.vehicleForm.invalid).toBeTrue();
    expect(component.f['make'].errors?.['required']).toBeTrue();
    expect(component.f['model'].errors?.['required']).toBeTrue();
    expect(component.f['year'].errors?.['required']).toBeTrue();
    expect(component.f['vin'].errors?.['required']).toBeTrue();
    expect(component.f['licensePlate'].errors?.['required']).toBeTrue();
  });

  it('deve ser inválido se year for menor que 1900 ou maior que o ano atual', () => {
    const currentYear = new Date().getFullYear();
    component.vehicleForm.setValue({ make: 'A', model: 'B', year: 1800, vin: '12345678901234567', licensePlate: 'AAA-0000' });
    expect(component.f['year'].errors?.['min']).toBeTruthy();
    component.vehicleForm.setValue({ make: 'A', model: 'B', year: currentYear + 1, vin: '12345678901234567', licensePlate: 'AAA-0000' });
    expect(component.f['year'].errors?.['max']).toBeTruthy();
  });

  it('deve ser inválido se VIN não tiver 17 caracteres', () => {
    component.vehicleForm.setValue({ make: 'A', model: 'B', year: 2000, vin: '123', licensePlate: 'AAA-0000' });
    expect(component.f['vin'].errors?.['pattern']).toBeTruthy();
    component.vehicleForm.setValue({ make: 'A', model: 'B', year: 2000, vin: '12345678901234567', licensePlate: 'AAA-0000' });
    expect(component.f['vin'].errors).toBeNull();
  });

  it('deve chamar addVehicle e navegar ao submeter formulário válido', () => {
    const vehicle = { make: 'A', model: 'B', year: 2000, vin: '12345678901234567', licensePlate: 'AAA-0000' };
    const vehicleServiceSpy = jasmine.createSpyObj('VehicleService', ['addVehicle']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component['vehicleService'] = vehicleServiceSpy;
    component['router'] = routerSpy;
    component.vehicleForm.setValue(vehicle);
    component.onSubmit();
    expect(vehicleServiceSpy.addVehicle).toHaveBeenCalledWith(vehicle);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
