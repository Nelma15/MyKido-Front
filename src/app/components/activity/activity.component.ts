
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../models/Activity';
import { NgFor } from '@angular/common';
import { ActivityService } from '../../services/activity.service';
import { Child } from '../../models/Child';

@Component({
  selector: 'app-activity',
  imports: [FormsModule,NgFor],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent implements OnInit {

 // Tableau qui va stocker les activités saisies
 activities: Activity[] = [];
 children: Child[] = [];

 // Modèle pour le formulaire
 newActivity: Activity = {
   childName: '',
   activityType: '',
   date: '',
   time: '',
   notes: ''
 };

 constructor(private activityService: ActivityService) { }

 ngOnInit(): void {
    this.activityService.getChildren().subscribe(data => {
      this.children = data;
   
 });
}
 // Méthode appelée lors de la soumission du formulaire
 onSubmit() {
   // Vérifie que tous les champs obligatoires sont remplis
   if (this.newActivity.childName && this.newActivity.activityType && this.newActivity.date && this.newActivity.time) {
     // Ajout de l'activité dans le tableau
     this.activities.push({ ...this.newActivity });

     // Réinitialisation du formulaire
     this.newActivity = {
       childName: '',
       activityType: '',
       date: '',
       time: '',
       notes: ''
     };
   }
   
 }
}
 
  



