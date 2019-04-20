import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute   } from "@angular/router";
import { RestService } from '../rest.service';




export interface tableData {
  name: string;
  solved_date: string;
  description: string;
  long_description: string;
}
  
  export interface Branch {
  viewValue: string;
  value: string;
}


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  @Input() productData = {keyword1: '',keyword2: '',keyword3:''};

 ELEMENT_DATA: tableData[];
  key1: string;
  key2: string;
  key3: string;

  branches: Branch[] = [
    {value: 'CIVIL', viewValue: 'CIVIL'},
    {value: 'CRIMINAL', viewValue: 'CRIMINAL'},
    {value: 'FINANCIAL', viewValue: 'FINANCIAL'}
  ];

  displayedColumns: string[] = ['Name', 'Description', 'LongDescription', 'SolvedDate'];
  dataSource = this.ELEMENT_DATA;

  constructor(private route: ActivatedRoute,public rest: RestService) { 
  	this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {

    this.key1 = "";
    this.key2 = "";
    this.key3 = "";
  }

   getData(){
  this.productData = {keyword1: this.key1,keyword2: this.key2,keyword3:this.key3};
  this.getCases();
}

getCases() {
  this.dataSource = [];
      this.rest.getCases(this.productData).subscribe((result)=>{
        console.log(result);
        if (result.length != 0) {
          this.dataSource = result;
      
        }
      }, (err) => {
        console.log(err);
      });
      
    }
}
