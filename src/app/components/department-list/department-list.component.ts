import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
      <li [class.selected]="isSelected(department)" (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge"> {{department.id}} </span> {{ department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  public selectedId : any;
  departments = [ 
    {"id": 1, "name": "Angular"}, 
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "Mongo"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
  ]

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.selectedId = parseInt(params.get('id')!); 

   }); 
  }

  onSelect(department: { id: any; }) { 

    //this.router.navigate(['/departments',department.id])
    this.router.navigate([department.id], {relativeTo: this.route}) ; 
  }

  isSelected(department: { id: any; }){ 
    return department.id === this.selectedId ; 
  }
}
