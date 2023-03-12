import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.data.subscribe(({users}) => {
      // do something with your resolved data ...
      console.log(users);
      
    })
  }
}
