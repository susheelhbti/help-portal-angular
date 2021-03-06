import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { Help } from '../../models/Help';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  helps: Help[];
 
  constructor(
    private helpService: HelpService) { }

  ngOnInit() {
    let today = new Date();
    this.helpService.getHelps().subscribe(helps => {
        console.log(helps);
        this.helps = helps;
      }
    );
  }
  
}
