import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  title = 'Cliente';

  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'jose',
      apellido: 'perez',
      createAt: '',
      email: 'jose@gmail.com',
    },
    {
      id: 2,
      nombre: 'juan',
      apellido: 'suarez',
      createAt: '',
      email: 'juan@gmail.com',
    },
    {
      id: 3,
      nombre: 'maria',
      apellido: 'vasquez',
      createAt: '',
      email: 'maria@gmail.com',
    },
  ];
}
