import { Component, Injectable, OnInit } from '@angular/core';
import { ChildService } from '../../services/ChildService';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Adress} from '../../models/Adress';
import {Register} from '../../models/Register';
import {Child} from '../../models/Child';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-children-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './children-list.component.html',
  styleUrl: './children-list.component.css'
})
export class ChildrenListComponent implements OnInit {
  children: any[] = [];
  childForm: any = {
    lastName: null,
    firstName: null,
    birthDate: null,
    allergies: null,
    notes: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isPanelOpen = false;
  isAddChildOpen = false;

  constructor(private childService: ChildService,private router:Router) {}

  ngOnInit(): void {
    this.childService.getChildren().subscribe(data => {
      this.children = data;
    });
  }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  toggleChildPanel() {
    this.isAddChildOpen = !this.isAddChildOpen;
  }

  onSubmit(): void {
    const {lastName, firstName, birthDate,allergies, notes } = this.childForm;
    let child = new Child(lastName, firstName, birthDate, allergies,0, notes,0);
    this.childService.addChild(child).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
