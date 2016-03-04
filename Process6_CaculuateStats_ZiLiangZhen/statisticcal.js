/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var statistic = "15,16,17,18,25,34,35,37";

var states = {
    start: 0,
    running: 1,
    waiting: 2,
    ready: 3,
    stop: 4,
}

function getMean(arrayS){
    var mean = 0;
    for(i = 0; i<arrayS.length; i++){
        mean = mean + arrayS[i];
    }
    mean = mean/arrayS.length;
    return mean;
}

function getSD(arrayS){
    var SD = 0;
    var mean = getMean(arrayS);
    for(i = 0; i<arrayS.length; i++){
        SD = SD + Math.pow((arrayS[i] -mean), 2);
    }
    SD = Math.sqrt(SD/arrayS.length);
    return SD;
}

function testing(){
    var stat = statistic.split(",");
    var intstat = [];
    for(i = 0; i<stat.length; i++){
        intstat[i] = Number(stat[i]);
    }
    
    var mean = getMean(intstat).toString();
    var SD = getSD(intstat).toString();
    
    document.getElementById("test").innerHTML = "mean: " + mean
            + "  SD: " + SD;
}

