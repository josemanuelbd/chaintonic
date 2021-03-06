import { Component } from '@angular/core';
import { Router} from '@angular/router';
/*
import { Feature } from '../../services/features/feature';
import { FeaturesService } from '../../services/features/features.service.ts';
import { Tech } from '../../services/techs/tech';
import { TechsService } from '../../services/techs/techs.service.ts';
*/

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our core.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html'
})
export class LoginComponent {
  role: string;
  startup: string;
  // Set our default values
  /*
  features: Feature[];
  techs: Tech[];
  rowHeight: string = '200px';
  */
  /*
  constructor(private featuresService: FeaturesService, private techsService: TechsService) {
    console.log('out home');
   }
   */
  constructor(private router: Router) {
    this.role = 'employee';

     
  }

  ngOnInit() {
    /*
    this.features = this.featuresService.getFeatures();
    this.techs = this.techsService.getTechs();
    console.log(this.features);
    console.log('on init home');
    */
  }

  selectRole(role:string) {
    this.role = role;
  }

  selectStartup(startup:string) {
    this.startup = startup;
  }

  login(){
    if(this.role != 'investor'){
      this.router.navigate(['/startup/'+this.startup+'/'+this.role]);
    }
    else
      this.router.navigate(['/'+this.role]);
  }

}
