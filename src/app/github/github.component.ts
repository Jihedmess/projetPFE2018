import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Http} from '@angular/http';
import {Router, NavigationExtras} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {GithubServiceService} from '../service/github-service.service';
import * as Plotly from 'plotly.js';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  selectedDeviceProjet: string;
  selectedDeviceFiltre: string;
  selectedCharte: string;
  private data: Array<any>;
  constructor( private github: GithubServiceService, private http: Http, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  onChange() {
    console.log(this.selectedDeviceProjet);
    console.log(this.selectedDeviceFiltre);
    console.log(this.selectedCharte);
    if (this.selectedDeviceFiltre === 'Commits') {
      if (this.selectedDeviceProjet === 'ProjetPrestashop') {
        if (this.selectedCharte === 'Charte1') {

        } else if (this.selectedCharte === 'Charte2') {
          this.generateLineCharte();

        }
      }


    }
  }
  genereCharte() {
    console.log(this.data + 'navagiation extras');
    console.log(this.selectedDeviceProjet + 'navigation extras');
    console.log(this.selectedDeviceFiltre + 'navigation extras');
    const navigationextras: NavigationExtras = {
      queryParams: {

        'data': this.data,
        'projet': this.selectedDeviceProjet,
        'action': this.selectedDeviceFiltre
      }
    };
    /*console.log(this.selectedDeviceProjet + ' et ' + this.selectedDeviceFiltre);

    this.charte1 = new Charte(1, this.selectedDeviceFiltre , this.selectedDeviceProjet , this.data);
    this.base = new Base();
    this.base.setData(this.charte1);*/
    console.log(this.data + 'teste1');
    this.route.navigate(['chartes/'], navigationextras);

  }
  generateLineCharte() {
    const element = document.getElementById('chart');
    const data = [{
      x: [7, 20, 36, 14, 25, 36],
      y: [5, 17, 30, 40, 65, 76]
    }];
    const style = {
      margin: {t: 0},
      width: 500,
      height: 449
    };
    Plotly.plot(element, data, style);
  }
}
