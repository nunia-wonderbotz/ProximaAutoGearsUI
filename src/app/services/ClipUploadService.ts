import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ClipUploadService {

  constructor(private http: HttpClient) { }

  apiUri = 'https://omtqybmuo7.execute-api.ap-south-1.amazonaws.com/Prod/xdata/';


  saveUploadFile(file: any,fileKey:any) {

    var httpOptions = {

      headers: new HttpHeaders({
        name: 'niraj',
         created_by: 'niraj Singh',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        file_key: fileKey
      })
    }

    // let formParams = new FormData();

    // formParams.append('file', file)

    return this.http.post<any>(
      this.apiUri,
      file,
      httpOptions
    );
  }
  getAll() {
    return this.http.get<any>(this.apiUri);
  }
}