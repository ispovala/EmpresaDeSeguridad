import { Persona } from "./persona.model";


export class User{
  id?:Number;
  username?: String;
  email?:String;
  password?:String;
  is_superuser?: Number;
  rol_id?:Number;
  persona?: Number;
  is_active?:Number;
  conduccion?:Boolean;
  armamento?:Boolean;
  nombre?:String;
  apellido?:String;
  identificacion?:Number;
}
