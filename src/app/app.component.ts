import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EMPLOYEES } from './datas';
import Swal from 'sweetalert2'

interface Empl {
  id: number;
  name: string;
  email: string;
  mo_no: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  empDetails="Employee Details"
  ngOnInit(): void {
  }

  datas: Empl[] = EMPLOYEES;
  emp: FormGroup | undefined;

  editCar(emp: Empl) {
    this.emp = new FormGroup({
      id: new FormControl(emp.id),
      name: new FormControl(emp.name),
      email: new FormControl(emp.email),
      mo_no: new FormControl(emp.mo_no)
    });
  }

  save() {
    let index = this.datas.findIndex(emp => emp.id === this.emp?.value.id);
    this.datas[index] = this.emp?.value;
  }
  deleteItem(){
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})

  }
 
}
