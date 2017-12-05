import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() legend;
  @Input() childPower;
  message: string = ""

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("onchanges")
    if (this.childPower > 9000 && this.childPower<=20000) {
      this.message = "Over 9000";
    } else if (this.childPower > 20000 && this.childPower < 25000) {
      this.message = "Superlative";
    } else if (this.childPower === 50000) {
      this.message = "The one!";
    } else if (this.childPower === 25000) {
      this.message = "Superlative Power!";
    } else {
      this.message = "";
    }
    console.log(this.childPower, this.message)
  }

}
