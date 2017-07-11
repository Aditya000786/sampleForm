import {WeekModel} from './WeekModel';
export class ProjectModel{
    constructor(public name:string,public clientName:string,public aboutProject:string,
    public startDate:string,public endDate:string,public weeks:WeekModel[]=null){}
}