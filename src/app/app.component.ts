import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EMPLOYEES } from './datas';
import Swal from 'sweetalert2';

interface Empl {
  isEdit: boolean;
  id: number;
  name: string;
  email: string;
  mo_no: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  empDetails = 'Employee Details';

  // constructor(){
  //   this.datas=[];
  // }
  ngOnInit(): void {}

  datas: Empl[] = EMPLOYEES;
  emp: FormGroup | undefined;
  // data: any;

  // editDetails(emp: Empl) {
  //   this.emp = new FormGroup({
  //     id: new FormControl(emp.id),
  //     name: new FormControl(emp.name),
  //     email: new FormControl(emp.email),
  //     mo_no: new FormControl(emp.mo_no),
  //   });
  // }
  editDetails(data: Empl) {
    this.datas.forEach((element) => {
      element.isEdit = false;
    });
    data.isEdit = true;
  }

  save() {
    let index = this.datas.findIndex((emp) => emp.id === this.emp?.value.id);
    this.datas[index] = this.emp?.value;
  }
  deleteItem(data: Empl) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.datas.forEach((value, index) => {
          if (value == data) {
            this.datas.splice(index, 1);
          }
        });
      }
    });
  }
}
