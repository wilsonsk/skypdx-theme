import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WpService {
  constructor(private httpClient:HttpClient) { }
  configUrl = '../server-config.json';

  getWp() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    };
    return this.httpClient.get('http://52.89.243.4/index.php/wp-json/wp/v2/media', options);
  }

  //
  // getEmployees(){
  //   return this._http.get("http://localhost/api/select.php/")
  //     .map(res=>{
  //       this.checkMe = res;
  //
  //       if(this.checkMe._body !== "0"){
  //          return res.json()
  //       }
  //
  //     });
  // }
  // addEmployee(info){
  //   return this._http.post("http://localhost/api/insert.php",info)
  //     .map(()=>"");
  // }
  // getEmployee(id){
  //   return this._http.post("http://localhost/api/selectone.php/",{'id':id})
  //     .map(res=>res.json());
  // }
  // deleteEmployee(id){
  //   return this._http.post("http://localhost/api/delete.php/",{'id':id})
  //     .map(()=>this.getEmployees());
  // }
  // updateEmployee(info){
  //   return this._http.post("http://localhost/api/update.php/", info)
  //     .map(()=>"");
  // }
}
