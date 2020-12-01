import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8000/api';
 
  constructor(private http: HttpClient) { }
 
  getImages() {
    return this.http.get<ApiImage[]>(`${this.url}/image`);
  }
 
  uploadImage(blobData, name, ext) {
    const formData = new FormData();
    formData.append('file', blobData, `myimage.${ext}`);
    formData.append('name', name);
 
    return this.http.post(`${this.url}/image`, formData);
  }
 
  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
 
    return this.http.post(`${this.url}/image`, formData);
  }
 
  deleteImage(id) {
    return this.http.delete(`${this.url}/image/${id}`);
  }

  register(params){
    return this.http.post<any>(this.url+'/public-register', params).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  login(params){
    return this.http.post<any>(this.url+'/public-login', params).subscribe(data => {
      let result = data;
    }, err =>{
      console.log(err);
    });
  }
}
