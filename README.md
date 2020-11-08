# Angular 8+ medium clap

[Stackblitz example](https://stackblitz.com/edit/angular-clap-demo?file=src/app/app.component.html)

![alt text](https://i.ibb.co/BCLdR6D/Untitled.png)

## Getting Started


### Installation

- Install the package :
    `npm install ang-clap --save`


### Usage

Import `AngClapModule` into `NgModule` in `app.module.ts`.
```js


import { AngClapModule } from 'ang-clap';

@NgModule({
  // ...
  imports: [
    AngClapModule
  ]
  // ...
})
```


Add the following component tag in you template

```html
<ang-clap  fillColor="purple"
           [claps]="6"
           [showBorder]="true"
           [showAnimation]="true"
           [maxClaps]="10"
           (mouseClickEvent)="clap($event)"
           (mouseLeaveEvent)="updateClap()"
           (clearClapsEvent)="removeClap()">
</ang-clap>
```

## Todos
click animation on slider

## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## License
free to use on any purpose.
