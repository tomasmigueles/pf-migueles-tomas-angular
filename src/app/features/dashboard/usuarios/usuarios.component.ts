import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog'
import { UsuariosDialogComponent } from '../../deshboard/usuarios/usuarios-dialog/usuarios-dialog.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
constructor(private matDialog: MatDialog) {}

openModal() void {
  this.MatDialog.open(UsuariosDialogComponent);
}
}
