import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Designation {
  designationId: number;
  designationName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DesignationsService {
  constructor(private http: HttpClient, private router: Router) {}

  getDesignations(apiUrl: string) {
    return this.http.get<Designation[]>(apiUrl);
  }

  getDesignation(url: string) {
    return this.http.get<Designation>(url);
  }

  createDesignation(url: string, designation: Designation) {
    this.http.post(url, designation).subscribe();
    this.router.navigate(['designations']);
  }

  editDesignation(url: string, designation: Designation) {
    this.http.put(url, designation).subscribe();
    this.router.navigate(['designations']);
  }
}
