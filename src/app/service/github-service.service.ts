import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceService {
  private username: string;
  private cliendid = 'd8cafa9661db534d1be1';
  private clientsecret = '803c66fd5389988dbad0120ae45ac49f38e8e65b';
  constructor(private http: Http) {
    console.log('service is now ready:');
    this.username = 'jihed';
  }
  getUserProfile(name: string) {
    return this.http.get('https://api.github.com/users/' + name)
      .map(res => res.json());
  }
  getUserRepo(name: string) {
    return this.http.get('https://api.github.com/users' + name + '/repos')
      .map(res => res.json());
  }
  getProfileInfo() {
    return this.http.get('https://api.github.com/repos/PrestaShop/PrestaShop/contributors' )
      .map(res => res.json());
  }
  getCommitPerDay() {
    return this.http.get('https://api.github.com/repos/PrestaShop/PrestaShop/stats/punch_card')
      .map(res => res.json());
  }
}
