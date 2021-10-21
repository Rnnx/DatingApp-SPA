import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any; // CLASS PROPERTY OF VALUES

  // DEPENDENCY INJECTION - ZA WCZESNIE NA ODWOLANIE DO API, 
  // ALE DOBRY JEST TO CZAS DO WSTRZYKNIECIA SERWISU, KTORY CHCEMY UZYC W KOMPONENCIE
  constructor(private http: HttpClient) { }

  // DOPIERO TUTAJ ODWOLUJEMY SIE DO API
  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    })
  }

}
