var Name=new Array();
Name[0]="Yaakov"
Name[1]="John"
Name[2]="Jen"
Name[3]="Jason"
Name[4]="Paul"
Name[5]="Frank"
Name[6]="Larry"
Name[7]="Paula"
Name[8]="Laura"
Name[9]="Jim"

for(var i = 0; i < Name.length; i++){
    if(Name[i].charAt(0) === 'J' || Name[i].charAt(0) ==='j'){
        console.log("Goodbye"+ Name[i])
    }
    else{
        console.log("Hello"+ Name[i])
    }    
}
