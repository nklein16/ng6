import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';    // why is the Observable value never read???
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    console.log("constructor ran");
    this.route.params.subscribe( 
      (params) => {
        console.log(params.id);
        this.user$ = params.id;
      }
    );
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe( 
      (data) => {
        this.user$ = data;
        console.log(this.user$);
      }
    );
  }

}
