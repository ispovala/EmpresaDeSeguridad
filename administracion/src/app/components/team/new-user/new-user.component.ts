import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user/user.model';
import { Persona } from 'src/app/core/models/user/persona.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { PersonaService } from 'src/app/core/services/persona/persona.service';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/core/models/user/cargo.model';
import { CargoService } from 'src/app/core/services/cargo/cargo.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  cargos?:Cargo[];
  nombres?:String;
  apellidos?:String;
  nacimiento?:Date;
  cedula?:Number;
  profesion?:String;
  telefono?:Number;
  email?:String;
  dirr?:String;
  cargo?:Number;
  conduccion?:any;
  armamento?:any;
  username?:String;
  password?:String;


  constructor(private cargoService:CargoService ,private usuarioService:UsuarioService, private userService: UserService, private router: Router, private personaService:PersonaService) { }

  ngOnInit(): void {
    if(!this.userService.isAuthenticated()){
      this.router.navigate(['login']);
    }
    this.cargoService.getAll().subscribe(
      cargs=>{
        this.cargos=cargs;
      }
    )
  }

  save(){
    if(this.conduccion==1){
      this.conduccion=true;
    }else{
      this.conduccion=false;
    }
    if(this.armamento==1){
      this.armamento=true;
    }else{
      this.armamento=false;
    }
    let persona:Persona={
      nombres:this.nombres,
      apellidos:this.apellidos,
      cedula:this.cedula,
      celular:this.telefono,
      fecha_nacimiento:this.nacimiento,
      direccion:this.dirr,
      estado:"1",
      profesion:this.profesion,
      cargo:this.cargo
    };
    let user:User={
      username: this.username,
      email:this.email,
      password:this.password,
      is_superuser:0,
      persona: 0,
      conduccion:this.conduccion,
      armamento:this.armamento
    }
    this.personaService.create(persona).subscribe(
      person => {
        user.persona=person.id;
        this.usuarioService.create(user).subscribe(
          () => {
            this.router.navigate(['/team']);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };



}
