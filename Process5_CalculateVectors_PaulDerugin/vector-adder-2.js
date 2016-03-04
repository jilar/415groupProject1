var vectorsDB = "-12,-3|11,-6|-7,-7|2,3|6,9|-14,-6|-3,-14|-13,11|3,15|13,-13|12,-8|5,12|8,14|-3,-14|-10,14|9,-15|14,12|-7,4|-13,-6|-15,14|10,4|14,16|4,0|15,0|3,3|-13,-8|6,13|2,-4|11,15|10,2|-8,-3|13,-3|6,-14|-14,-14|-12,9|-7,6|-3,15|-10,-14|12,8|-8,-11|2,9|5,10|-3,4|16,-12|15,11|13,1|-5,-3|9,8|6,-9|-2,8|-10,7|-10,-10|-5,-6|-12,-12|6,-3|-7,-13|-7,-2|-11,12|16,-3|-8,3|11,-13|12,-11|-12,9|5,5|3,9|4,4|-3,14|-5,16|-16,3|7,8|-1,10|14,-5|3,4|14,-2|8,-12|10,-3|-2,-4|12,-7|2,5|7,9|-15,-2|6,15|-5,-11|14,11|-5,9|-1,-15|-13,-13|2,-14|10,1|-14,-8|-14,-11|13,-5|9,14|3,-9|-8,3|2,8|-11,-4|-11,-6|10,12|3,13";

function addVectors() {
    
    var vectorsDBArray = vectorsDB.split("|");
    var xComponentsArray = [], yComponentsArray = [];
    
    for(var i=0; i<vectorsDBArray.length; i++){
        xComponentsArray[i] = vectorsDBArray[i].split(",")[0];
        yComponentsArray[i] = vectorsDBArray[i].split(",")[1];
    }
    
    var xSum = 0, ySum = 0;
    for(var i=0; i<xComponentsArray.length; i++){
        xSum += Number(xComponentsArray[i]);
        ySum += Number(yComponentsArray[i]);
    }
    
    var xSumString = xSum.toString();
    var ySumString = ySum.toString();
    var resultingVector = xSumString.concat(",",ySumString);
    document.getElementById("resultingVector").innerHTML = resultingVector;
}