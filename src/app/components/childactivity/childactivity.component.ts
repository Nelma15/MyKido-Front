import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../services/ChildService';
import { ActivityService } from '../../services/activity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childactivity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childactivity.component.html',
  styleUrl: './childactivity.component.css'
})
export class ChildactivityComponent implements OnInit {
  children: any[] = [];
  activities: { [key: number]: any[] } = {}; // Stockage des activités indexées par enfant
  currentDate: Date = new Date();

  constructor(private childService: ChildService, private activityService: ActivityService) {}

  ngOnInit(): void {
    this.childService.getChildren().subscribe(childrenData => {
      this.children = childrenData;

      this.children.forEach(child => {
        this.activityService.getActivitiesForChild(child.id).subscribe(activityData => {
          // Correction: Met à jour l'objet activities en créant une nouvelle référence
          this.activities = { ...this.activities, [child.id]: Array.isArray(activityData) ? activityData : [activityData] };

        });
      });
     
    });
  }
  getActivityIcon(activityType: string): string {
    const icons: { [key: string]: string } = {
      "Arrivée": "assets/images/activity/clock.png",
      "Hygiène": "assets/images/activity/diaper.png",
      "Activité": "assets/images/activity/paint.png",
      "Repas/Goûter": "assets/images/activity/food.png",
      "Sieste": "assets/images/activity/sleep.png",
      "Départ": "assets/images/activity/clock.png"
    };
    return icons[activityType] || "assets/icons/default.svg";
  }
}
