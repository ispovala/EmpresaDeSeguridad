import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { User } from 'src/app/core/models/user/user.model';
import { Persona } from 'src/app/core/models/user/persona.model';
import { PersonaService } from 'src/app/core/services/persona/persona.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  nombres?:String;
  apellidos?:String;
  nacimiento?:Date;
  cedula?:Number;
  celular?:Number;
  profesion?:String;
  telefono?:Number;
  email?:String;
  dirr?:String;
  cargo?:Number;
  conduccion?:any;
  armamento?:any;
  username?:String;
  password?:String;

  id?:number;
  id_per?:Number;

  constructor(private personaService:PersonaService,private usuarioService:UsuarioService, private userService: UserService, private router: Router,private root: ActivatedRoute,) { }

  ngOnInit(): void {
    if(!this.userService.isAuthenticated()){
      this.router.navigate(['login']);
    }
    this.root.params.forEach(param =>
      this.id = param['id']
    );
    this.usuarioService.get(this.id).subscribe(
      (data) => {
        this.username=data.username;
        this.email=data.email;
        this.password=data.password;
        this.conduccion=data.conduccion;
        this.armamento=data.armamento;
        this.personaService.get(data.persona).subscribe(
          (dat) => {
            this.id_per=dat.id;
            this.nombres=dat.nombres;
            this.apellidos=dat.apellidos;
            this.nacimiento=dat.fecha_nacimiento;
            this.cedula=dat.cedula;
            this.profesion=dat.profesion;
            this.telefono=dat.celular;
            this.dirr=dat.direccion;
            this.cargo=dat.cargo;
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );


  }

  deleteUser(){
    this.usuarioService.delete(this.id).subscribe(
      (response)=>{
        console.log(response)
        this.router.navigate(['/team']);
      }
    )
  }

  update(){
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
      persona: this.id_per,
      conduccion:this.conduccion,
      armamento:this.armamento
    }
    this.personaService.put(persona, this.id_per).subscribe(
      (per)=>{
        console.log(per)
      }
    )

    this.usuarioService.put(user, this.id).subscribe(
      (usr)=>{
        console.log(usr)
      }
    )

    this.router.navigate(['/team']);
  }

}
