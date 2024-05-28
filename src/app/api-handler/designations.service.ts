import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Designation {
  designationId: number;
  designationName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DesignationsService {
  constructor(private http: HttpClient) {}

  getDesignations(apiUrl: string) {
    return this.http.get<Designation[]>(apiUrl);
  }

  getDesignation(url: string) {
    return this.http.get<Designation>(url);
  }
}
