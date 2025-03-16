import { Component, Injectable, OnInit } from '@angular/core';
import { ChildService } from '../../services/ChildService';
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-children-list',
  imports: [CommonModule],
  templateUrl: './children-list.component.html',
  styleUrl: './children-list.component.css'
})
export class ChildrenListComponent implements OnInit{
  children: any[] = [];

  constructor(private childService: ChildService) {}

  ngOnInit(): void {
    this.childService.getChildren().subscribe(data => {
      this.children = data;
    });
  }



}
