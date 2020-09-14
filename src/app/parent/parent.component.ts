import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
today
  constructor() { }
  
public parentdata="yugandhar from parent"
  ngOnInit() {
    this.today=new Date()
  }
public mess=''
@ViewChild('nn') ee:ElementRef

ngAfterViewInit(){
  this.ee.nativeElement.focus()

  console.log(this.ee.nativeElement.ElementRef.html)
}
$apply(){
  confirm("jhhhh")
}

}
