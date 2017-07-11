import { Injectable } from '@angular/core';

import {ProjectModel} from '../../models/ProjectModel';
import {WeekModel} from '../../models/WeekModel';
/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProjectProvider {
  public projects:ProjectModel[]=[];


  addProject(name:string,clientName:string,aboutProject:string,startDate:string,endDate:string,week:WeekModel[]=null){
    let project=new ProjectModel(name,clientName,aboutProject,startDate,endDate,week);
    this.projects.push(project);
  }
  addWeeks(){
    
  }


  getProjects(){
    console.log("Visited");
    return this.projects.slice();
  }

}
