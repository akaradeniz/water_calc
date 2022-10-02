import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
//   export enum ACTIVITY_LEVEL {
//     LOW = "LOW",
//   AVG = "AVARAGE",
//   HIGH = "HIGH"
// }
})
export class DataService {
profile ={
  name:"adam",
  weight_lbs: 10,
  activity_level:"LOW",
}
  constructor() { }
}
