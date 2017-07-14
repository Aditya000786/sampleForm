export class DateModel{
    constructor(public name:string,public date:Date,public dayActive:boolean=false,public totalSeconds:number=0,
        public unChargedSeconds:number=0,public chargedSeconds:number=0){}
}