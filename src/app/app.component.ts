import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-clap';

  clap($event){
    console.log($event);
  }

  updateClap(){
    console.log('update');
  }

  removeClap(){
    console.log('remove');
  }
}


