import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  pageUsers ; any ;
  constructor( private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/demo/getAll')
      .map(rest => rest.json()).subscribe(data => {
      this.pageUsers = data;

    }, error2 => {
      console.log(error2);
    });
  }

}
