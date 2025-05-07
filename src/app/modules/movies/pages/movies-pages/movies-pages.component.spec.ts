import { ComponentFixture, TestBed } from '@angular/core/testing';  // Importa las herramientas necesarias para realizar pruebas en Angular
import { MoviesPagesComponent } from './movies-pages.component';  // Importa el componente que será probado

describe('MoviesPagesComponent', () => {
  let component: MoviesPagesComponent;  // Declara una variable para el componente que será probado
  let fixture: ComponentFixture<MoviesPagesComponent>;  // Declara una variable para la fixture (instancia del componente en el DOM)

  beforeEach(async () => {
    // Configura el entorno de pruebas antes de cada prueba
    await TestBed.configureTestingModule({
      imports: [MoviesPagesComponent]  // Declara el componente a probar como parte de la configuración
    })
    .compileComponents();  // Compila el componente para asegurarse de que todo esté listo

    // Crea la instancia del componente y la "fixture" asociada
    fixture = TestBed.createComponent(MoviesPagesComponent);
    component = fixture.componentInstance;  // Obtiene la instancia del componente
    fixture.detectChanges();  // Detecta los cambios y actualiza la vista del componente
  });

  // Prueba que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que la instancia del componente sea válida
  });
});
