import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-vehicle-in',
  templateUrl: './user-vehicle-in.component.html',
  styleUrls: ['../../../styles.css']
})
export class UserVehicleInComponent {
  formRequestVehicle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formRequestVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      // name: ['', Validators.required],
      // date: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formRequestVehicle.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formRequestVehicle.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

