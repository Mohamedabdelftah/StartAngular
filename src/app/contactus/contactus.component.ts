import { Component } from '@angular/core';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  showLabel(e: any): void {
    if (e.target.value.length > 0) {
      $("#" + e.target.name).css({ "top": "0px" })
    } else {
      $("#" + e.target.name).css({ "top": "1000px" })
    }
  }
}
