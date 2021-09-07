import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comprador } from '../model/comprador'
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _comprador: Comprador | undefined;
  private _token: string | undefined;

  constructor(private http: HttpClient) { }

  public get comprador(): Comprador{
  if(this._comprador != null){
    return this._comprador;
  }else if(this._comprador == null && sessionStorage.getItem('usuario') != null){
    this._comprador = JSON.parse(sessionStorage.getItem('usuario')!) as Comprador;
    return this._comprador!;
  }
  return new Comprador;
}
public get token(): string{
  if(this._token != null){
    return this._token;
  }else if(this._token == null && sessionStorage.getItem('token') != null){
    this._token = sessionStorage.getItem('token')!;
    return this._token;
  }
  return null!;
}

  login(comprador: Comprador): Observable<any>{
    const urlEndPoint = 'http://localhost:8080/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales});
    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username', comprador.clave);
    params.set('password', comprador.password);

    return this.http.post<any>(urlEndPoint, params.toString(), {headers: httpHeaders});
  }

  guardarUsuario(accessToken: string): void{
    let payload = this.obtenerPayload(accessToken);
    var listRol: String[] = [];
    this._comprador = new Comprador();
    this._comprador.nombre = payload.nombre;
    this._comprador.apellidoPaterno = payload.apellidoPaterno;
    this._comprador.apellidoMaterno = payload.apellidoMaterno;
    this._comprador.clave = payload.user_name;
    for(let rol in payload.authorities){
      listRol.push(payload.authorities[rol])
    }
    this._comprador.roles = listRol;
    //almacena los datos del usuario en la sesion
    sessionStorage.setItem('usuario', JSON.stringify(this._comprador))
    //stringify: convierte tipo objeto a JSON
  }

  guardarToken(accessToken: string): void{
    this._token = accessToken;
    //almacena el token en la sesion
    sessionStorage.setItem('token', accessToken)
  }

  obtenerPayload(accessToken: string): any{
    if(accessToken != null){
      return JSON.parse(atob(accessToken.split('.')[1]))
    }
    return null;
  }

  isAuthtenticated(): boolean{
    let payload = this.obtenerPayload(this.token);//metodo getter y no _token
    if(payload != null && payload.user_name && payload.user_name.length > 0){
      return true;
    }
    return false;
  }
  getRol(): string {
    var rol = ""
    let payload = this.obtenerPayload(this.token);
    for(let item in payload.authorities){
      rol = payload.authorities[item];
    }
    return rol;
  }

  logout(): void{
    this._token = null!;
    this._comprador = null!;
    sessionStorage.clear;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

}
