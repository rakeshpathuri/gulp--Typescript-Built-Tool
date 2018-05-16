import {sayhello}  from "./greet"

class student {
    fullName:String;
    constructor(public first:String,public middle:String, public last:String){}
    fullname = this.last + " "+this.first+" "+this.middle;

}

interface persone {
    first:String;
    last:String;
}

function fullnameWrite(name:persone)
{
    console.log(name.first+" "+name.last);
}

fullnameWrite(new student("Rakesh","Chowdhary","Pathuri"));

console.log(sayhello("Rakesh"));
console.log(sayhello("Mom-Dad"));

