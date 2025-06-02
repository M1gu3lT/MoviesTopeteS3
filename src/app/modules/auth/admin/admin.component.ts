// Importo lo necesario para hacer peticiones HTTP, manejar referencias a elementos HTML, y trabajar con formularios.
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Defino el componente y los módulos que utiliza
@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
[x: string]: any;

  // Guardo la referencia al modal para abrirlo o cerrarlo manualmente
  @ViewChild('userModal') userModal: ElementRef | undefined;

  // Aquí guardo la lista de usuarios que obtengo de la API
  MTList: any[] = [];

  // Este objeto es el que uso para registrar o editar un usuario
  MTObj: any = {
    "id": 0,
    "username": "",
    "passwordHash": "",
    "createDate": ""
  }

  // Inyecto el cliente HTTP para hacer peticiones
  http = inject(HttpClient);

  // Cuando el componente se inicializa, obtengo todos los usuarios
  ngOnInit(): void {
    this.getAllUsers();
  }

  // Abro el modal manualmente cambiando el estilo
  openModal(){
    if(this.userModal){
      this.userModal.nativeElement.style.display = 'block';
    }
  }

  // Cierro el modal de la misma forma
  closeModal(){
    if(this.userModal){
      this.userModal.nativeElement.style.display = 'none';
    }
  }

  // Llamo a la API para obtener todos los usuarios y los guardo en la lista
  getAllUsers(){
    this.http.get("https://localhost:7278/api/MTMaster").subscribe((res:any) =>{
        this.MTList = res;
    });
  }

  // Cuando quiero guardar un nuevo usuario, hago un POST y luego actualizo la lista
  onSave(){
    this.http.post("https://localhost:7278/api/MTMaster/", this.MTObj).subscribe((res:any) =>{
      this.getAllUsers();
      this.closeModal();
    });
  }

  // Si edito un usuario existente, hago un PUT y actualizo la lista también
  onUpdate() {
  if (!this.MTObj.id) {
    console.error("ID del usuario no definido");
    return;
  }

  this.http.put("https://localhost:7278/api/MTMaster/" + this.MTObj.id, this.MTObj)
    .subscribe((res: any) => {
      this.getAllUsers();
      this.closeModal();
    }); 
}

  // Elimino un usuario después de confirmar con el usuario
  deleteUser(data: any){
    const isDelete = confirm("¿Está seguro de eliminar el usuario?");
    if(isDelete){
      this.http.delete("https://localhost:7278/api/MTMaster/"+ data.id).subscribe((res:any) =>{
        this.getAllUsers();
      });
    }
  }

  // Cargo los datos del usuario en el formulario para poder editarlos
  editUser(data: any){
    this.openModal();
    this.MTObj = data;
  }
}
