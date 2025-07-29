import { VehicleService } from './vehicle.service';
import { Vehicle } from '../models/vehicle.model';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    service = new VehicleService();
  });

  it('deve iniciar com lista vazia', () => {
    expect(service.getVehicles().length).toBe(0);
  });

  it('deve adicionar um veículo e retornar na lista', () => {
    const vehicle: Vehicle = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      vin: '1HGCM82633A004352',
      licensePlate: 'ABC-1234',
    };
    service.addVehicle(vehicle);
    const vehicles = service.getVehicles();
    expect(vehicles.length).toBe(1);
    expect(vehicles[0]).toEqual(vehicle);
  });
});
