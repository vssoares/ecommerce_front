import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
    
  }

  ngOnInit(): void {
    console.log(this.data);
      
  }
}
