import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
@Input('childc') public name;
@Output() public childcomponent =new EventEmitter();

add(){
this.childcomponent.emit("data  from child")
}



@Input("parentdata") public ll
}
