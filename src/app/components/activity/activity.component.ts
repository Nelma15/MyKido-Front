
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../models/Activity';
import { NgFor } from '@angular/common';
import { ActivityService } from '../../services/activity.service';
import { Child } from '../../models/Child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [FormsModule,NgFor,CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent implements OnInit {

 // Tableau qui va stocker les activités saisies
 activities: Activity[] = [];
 children: Child[] = [];

 // Modèle pour le formulaire
 newActivity: Activity = {
  activityTimeStart: new Date(),
  activityTimeEnd: new Date(),
  activityName: '',
  activityDescription: '',
  activityType: '',
  // photo: new Uint8Array(),
  childId: 0
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
   if (this.newActivity.activityTimeStart && this.newActivity.activityTimeEnd && this.newActivity.activityType && this.newActivity.activityName && this.newActivity.childId) {
     // Ajout de l'activité dans le tableau
     this.activityService.registerActivity(this.newActivity).subscribe(
      (savedActivity: Activity) => {
        // L'activité sauvegardée (possiblement avec un id généré par le backend)
        this.activities.push(savedActivity);

     // Réinitialisation du formulaire
     this.newActivity = {
      activityTimeStart: new Date(),
      activityTimeEnd: new Date(),
      activityName: '',
      activityDescription: '',
      activityType: '',
      // photo: new Uint8Array(),
      childId: 0
     };
   }
   
    );  
}
 }
}
 
  



