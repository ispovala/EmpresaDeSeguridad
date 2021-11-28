import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { PersonaService } from 'src/app/core/services/persona/persona.service';
import { User } from 'src/app/core/models/user/user.model';
import { Persona } from 'src/app/core/models/user/persona.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  users?: User[];
  constructor(private _userService:UsuarioService, private _personasService:PersonaService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(!this.userService.isAuthenticated()){
      this.router.navigate(['login']);
    }
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getAll()
      .subscribe(
        usuarios => {
          console.log(usuarios)
          this._personasService.getAll()
            .subscribe(
              personas=>{
                usuarios.forEach(
                  (value:User, index:number, array:User[])=>{
                    if(value.is_superuser!=1){
                      personas.forEach(
                        (val:Persona, ind:number, arr:Persona[])=>{
                          if(value.persona==val.id){
                            value.nombre=val.nombres;
                            value.apellido=val.apellidos;
                            value.identificacion=val.cedula;

                          }
                        }
                      )
                    }
                  }
                )
              }
            )
          this.users = usuarios;
        }
      );
  }


}
