export class Activity {
  activityTimeStart: Date;
  activityTimeEnd: Date;
  public  activityName: string;
  public activityDescription: string;
  public activityType: string;
  //public photo: Uint8Array;
  childId: number;

  constructor(
    activityTimeStart: Date,
    activityTimeEnd: Date,
    activityName: string,
    activityDescription: string,
    activityType: string,
    //photo: Uint8Array,
    childId: number
  ) {
    this.activityTimeStart = activityTimeStart;
    this.activityTimeEnd = activityTimeEnd;
    this.activityName = activityName;
    this.activityDescription = activityDescription;
    this.activityType = activityType;
    //this.photo = photo;
    this.childId = childId;
  }
}