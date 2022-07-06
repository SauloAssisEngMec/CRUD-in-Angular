import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  postProduct(data : any){
    return this.http.post<any>(environment.URL,data);
  }
  getProduct(){
    return this.http.get<any>(environment.URL);
  }
  putProduct(data:any, id : number){
    return this.http.put<any>(environment.URL + id, data);
  } 

  deleteProduct(id: number){
    return this.http.delete<any>(environment.URL+id);
  }


} 

