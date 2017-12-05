import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numbers : number[] = [];
  title = 'app works!';
  powerHuman : number;
  powerSaiyan : number;
  powerSupersaiyan : number;
  powerSupersaiyan2 : number;
  powerSupersaiyan3 : number;
  powerSupersaiyan4 : number;
  power : number;

  ngOnInit() {
    for (let i = 1; i <=100; i++) {
      this.numbers.push(i);
    }
  }

  onCalculatePower() {
    this.powerHuman = this.power;
    this.powerSaiyan = this.power * 10;
    this.powerSupersaiyan = this.power * 90;
    this.powerSupersaiyan2 = this.power * 150;
    this.powerSupersaiyan3 = this.power * 250;
    this.powerSupersaiyan4 = this.power * 500; 
  }
}
