// the "filesystem"
var files=["File1String","File2String","File3String","File4string","File5String","File6String"]           //array of files as textstrings


// the process prototype
function Process() {
    pid = " "; // process id
    fileArraynumber = 0; //position of string to get correct file to read from the files array
    filePosition = 0; // keeps track of where (char number) in the file the IO device is
    dataString = ""; // this will be one long string, basically a copy of the file located @ filePath, that will be constructed 100 charsa at a time
    state = "new";
}
Process.prototype.processAction = function() {                           //the function processAction does the necessary computation of the process
  return null;
}

/* In the following lines the processes are declared, and processAction is overridden 
 * however because our O/S doesnt work the actual processes' code can be found in the sepearate files
 */
//creating process 1, while inherting the variables of Process
var p1 = new Process();
//Override processAction of Process prototye
p1.processAction= function() {
  //perform specific process 1 computation       
};

//declare other 5 proccesses, as well as override processAction
var p2= new Process();                     
p2.processAction= function() {};
var p3= new Process();                     
p3.processAction= function() {};
var p4= new Process();                     
p4.processAction= function() {};
var p5= new Process();                     
p5.processAction= function() {};
var p6= new Process();                     
p6.processAction= function() {};

 //set index of correct file String in the files array for each process
 p2.fileArraynumber=1;
 p3.fileArraynumber=2;
 p4.fileArraynumber=3;
 p5.fileArraynumber=4;
 p6.fileArraynumber=5;


function runIOQueue() {
    var IOQueue = [];
    IOQueue.push(p1);
    IOQueue.push(p2);
    IOQueue.push(p3);
    IOQueue.push(p4);
    IOQueue.push(p5);
    IOQueue.push(p6);
    
    var currentProcess, state;
	
    // while the IO still has processes in its queue
    while (IOQueue.length > 0) {
        currentProcess = IOQueue.shift();              //gets the next process in the queue
        state = currentProcess.state;
		
		switch (state) {
			case "new":
                                for (i=0; i<100;i++){                                                               //get 100 characters from file, then wait
                                   currentProcess.dataString=currentProcess.dataString+files[currentProcess.fileArrayNumber].charAtcharAt[currentProcess.filePosition+i];
                                   if(i+1== files[currentProcess.fileArrayNumber].length){                            //file reading has completed, process is ready to compute
                                       currentProcess.filePosition=i;
                                       break;
                                   }
                                }
                                 if(currentProcess.dataString== files[currentProcess.fileArrayNumber]){               //process done reading, change state to ready put at bottom of queue
                                    currentProcess.state=="ready"
                                    IOQueue.push(currentProcess);
                                    break;
                                }
				currentProcess.state=="waiting"                                                       //process still needs to keep reading file, change to waiting state
                                IOQueue.push(currentProcess);
				break;
			case "ready":
				// place process in ready queue (do this when we actually have separate queues for CPU and IO)
                                currentProcess.state=="running";  
				break;
			case "running":
				// "The CPU is working on this process's instructinos" - continue execution
                                //makes use of process.dataString
                                currentProcess.processAction();
				break;
			case "waiting": // means waiting for access to IO device
				for (i=0; i<100;i++){                                                               //read a character from specified file, 1 at a time at most 100.
                                   currentProcess.dataString=currentProcess.dataString+files[currentProcess.fileArrayNumber].charAtcharAt[currentProcess.position+i];
                                   if(i+1== files[currentProcess.fileArrayNumber].length){                          //file reading has completed, process is ready to compute
                                       break;
                                   }
                                }
                                if(currentProcess.dataString== files[currentProcess.fileArrayNumber]){
                                    currentProcess.state=="ready"
                                    IOQueue.push(currentProcess);
                                    break;
                                }
				currentProcess.state=="waiting"
                                IOQueue.push(currentProcess);
				break;
			case "terminated": 
                                // process has completed; remove it from the queue
				// the .shift() operation already removed it from the queue.
		}
    }
}