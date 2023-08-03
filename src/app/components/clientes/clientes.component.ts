import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  title = 'Cliente';

  clientes: Cliente[] = [];

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'createAt',
    'email',
  ];

  ngOnInit() {
    this.clientes = CLIENTES;
  }
}
