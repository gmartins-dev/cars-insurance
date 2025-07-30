import { VehicleService } from './vehicle.service';
import { Vehicle } from '../models/vehicle.model';

describe('VehicleService', () => {
  let service: VehicleService;
  let mockVehicle: Vehicle;

  beforeEach(() => {
    localStorage.clear();
    service = new VehicleService();
    mockVehicle = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      vin: '1HGCM82633A004352',
      licensePlate: 'ABC-1234',
    };
  });

  it('deve iniciar com lista vazia quando não há dados no localStorage', () => {
    expect(service.getVehicles().length).toBe(0);
  });

  it('deve carregar veículos do localStorage ao inicializar', () => {
    localStorage.setItem('vehicles', JSON.stringify([mockVehicle]));
    service = new VehicleService();
    expect(service.getVehicles().length).toBe(1);
    expect(service.getVehicles()[0]).toEqual(mockVehicle);
  });

  it('deve adicionar um veículo e persistir no localStorage', () => {
    service.addVehicle(mockVehicle);
    const vehicles = service.getVehicles();
    expect(vehicles.length).toBe(1);
    expect(vehicles[0]).toEqual(mockVehicle);

    const stored = JSON.parse(localStorage.getItem('vehicles') || '[]');
    expect(stored.length).toBe(1);
    expect(stored[0]).toEqual(mockVehicle);
  });
});
