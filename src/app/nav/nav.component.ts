import { Component ,OnInit} from "@angular/core";
import * as $ from "jquery";

@Component({
    selector: "app-nav",
    templateUrl: "nav.component.html",
    styleUrls: ["nav.component.css"]
})

export class Navcomponent implements OnInit{
    users:string;
  ngOnInit(){
    var that=this;
    
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/users",
      method:"GET",
      success:function(res){
        console.log(res);
        that.users=res;
      }
    })
  }

}