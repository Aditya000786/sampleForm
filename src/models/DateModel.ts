export class DateModel{
    constructor(public name:string,public date:Date,public dayActive:boolean=false,public totalSeconds:number=null,public unChargedSeconds:number=null,
        public chargedSeconds:number=null){}
}