//Update a security file – search through a security file of your design and update 
//the user's password. Both the user name and its password to be updated  
//hard coded into the process. 

var fileString="sally13 letmein!,roomba cleanDahHouse,DinoHitler bloobleeblah,BinaryMan 1001010100,Usr123 PASS876!@#"; //UserDatabase.txt file as a textString
var username="roobma";                      //hardcoded Username for password change
var usernameANDpass="roomba cleanDahHouse";
var passwordChange="cleanDahFloors" ;       //hardcoded new Password

document.getElementById("File").innerHTML =fileString;

function UpdatePassword(){
    var stringArray= fileString.split(",");                               //parse file, new line is delimeter 
    var position=stringArray.indexOf(usernameANDpass);                    //find username in array
    if(position==-1){                                                     //if username not found
        window.alert("Username not found");                                 //hardcoded the username and file, this should never happen
    }else{
        stringArray[position]=username +" "+passwordChange;               //update password
    }
    fileString=stringArray.join(",");                                    //join array back into a text string
    document.getElementById("modifiedFile").innerHTML =fileString;
}
 
