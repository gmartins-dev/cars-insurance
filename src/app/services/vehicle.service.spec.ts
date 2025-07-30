import { VehicleService } from './vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';

describe('VehicleService', () => {
  let service: VehicleService;
  let mockVehicle: Vehicle;
  let mockVehicle2: Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService]
    });
    localStorage.clear();
    service = TestBed.inject(VehicleService);
    mockVehicle = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      vin: '1HGCM82633A004352',
      licensePlate: 'ABC-1234',
    };
    mockVehicle2 = {
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      vin: '2HGFB2F54MH123456',
      licensePlate: 'XYZ-5678',
    };
  });

  it('deve iniciar com lista vazia quando não há dados no localStorage', (done) => {
    service.getVehicles().subscribe(vehicles => {
      expect(vehicles.length).toBe(0);
      done();
    });
  });

  it('deve carregar veículos do localStorage ao inicializar', (done) => {
    localStorage.setItem('vehicles', JSON.stringify([mockVehicle]));
    service = new VehicleService();
    
    service.getVehicles().subscribe(vehicles => {
      expect(vehicles.length).toBe(1);
      expect(vehicles[0]).toEqual(mockVehicle);
      done();
    });
  });

  it('deve remover um veículo específico pelo VIN', (done) => {
    service.addVehicle(mockVehicle);
    service.addVehicle(mockVehicle2);
    
    service.removeVehicle(mockVehicle.vin);
    
    service.getVehicles().subscribe(vehicles => {
      const stored = JSON.parse(localStorage.getItem('vehicles') || '[]');
      
      expect(vehicles.length).toBe(1);
      expect(vehicles[0]).toEqual(mockVehicle2);
      expect(stored.length).toBe(1);
      expect(stored[0]).toEqual(mockVehicle2);
      done();
    });
  });

  it('deve limpar todos os veículos', (done) => {
    service.addVehicle(mockVehicle);
    service.addVehicle(mockVehicle2);
    
    service.clearVehicles();
    
    service.getVehicles().subscribe(vehicles => {
      const stored = JSON.parse(localStorage.getItem('vehicles') || '[]');
      
      expect(vehicles.length).toBe(0);
      expect(stored.length).toBe(0);
      done();
    });
  });

  it('deve adicionar um veículo corretamente', (done) => {
    service.addVehicle(mockVehicle);
    
    service.getVehicles().subscribe({
      next: (vehicles) => {
        expect(vehicles.length).toBe(1);
        expect(vehicles[0]).toEqual(mockVehicle);
        
        const stored = JSON.parse(localStorage.getItem('vehicles') || '[]');
        expect(stored.length).toBe(1);
        expect(stored[0]).toEqual(mockVehicle);
        done();
      },
      error: done
    });
  });

  it('não deve permitir veículos duplicados com mesmo VIN', (done) => {
    service.addVehicle(mockVehicle);
    service.addVehicle({...mockVehicle, model: 'Duplicado'});
    
    service.getVehicles().subscribe({
      next: (vehicles) => {
        expect(vehicles.length).toBe(1);
        expect(vehicles[0].model).toBe('Corolla');
        done();
      },
      error: done
    });
  });

  it('deve manter a persistência após múltiplas operações', fakeAsync(() => {
    // Limpar os veículos primeiro para garantir um estado limpo
    service.clearVehicles();
    tick();

    // Adicionar os dois veículos
    service.addVehicle(mockVehicle);
    service.addVehicle(mockVehicle2);
    tick();

    // Primeira verificação: os dois veículos devem estar na lista
    let vehicles: Vehicle[] = [];
    service.getVehicles().subscribe(v => vehicles = v);
    tick();
    expect(vehicles.length).toBe(2);

    // Remover um veículo
    service.removeVehicle(mockVehicle.vin);
    tick();

    // Segunda verificação: apenas um veículo deve permanecer
    service.getVehicles().subscribe(v => vehicles = v);
    tick();
    expect(vehicles.length).toBe(1);
    expect(vehicles[0]).toEqual(mockVehicle2);
  }));

  afterEach(() => {
    localStorage.clear();
  });
});
