import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-riproducip',
  templateUrl: './riproducip.component.html',
  styleUrls: ['./riproducip.component.css']
})
export class RiproducipComponent implements OnInit {
src:string=""

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        var id=params.id
        if(id==0){
          this.src="../../assets/hey.mp3"
        }
        if(id==1){
          this.src="../../assets/ukulele.mp3"
        }
        if(id==2){
          this.src="../../assets/summer.mp3"
        }
      }
    )
  }

}
