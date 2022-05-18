import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router' ; 
@Component({
  selector: 'app-department-details',
  template: `
    <h3> department with id {{id}} </h3> 
    <button (click)="goPrevious()" > Previous </button>
    <button (click)="goNext()"  >  Next </button> 
    <button (click)="goToDepartments()"> Back </button> 
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public id: any; 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.id = parseInt(this.route.snapshot.paramMap.get('id')!) ;
    this.route.paramMap.subscribe((params: ParamMap)=> {
       this.id = parseInt(params.get('id')!); 

    }); 
  }

  goPrevious() {
    let previousId = this.id - 1  ; 
    this.router.navigate(['/departments', previousId]); 
  }

  goNext() {
    let nextId = this.id + 1  ; 
    this.router.navigate(['/departments', nextId]); 
  }

  goToDepartments() { 
    let selectedId = this.id ; 
    //this.router.navigate(['/departments', {id:selectedId}])
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this.route})
  }
}
