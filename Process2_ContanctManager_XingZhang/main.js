var fileInput = document.getElementById("csv");
//var m =

readFile = function () {
    var reader = new FileReader();
    reader.onload = function () 
    {
        document.getElementById('out').innerHTML = reader.result;
        var input = reader.result;
        var i;
        var info = ["vic,55436","jack,23432"];
         
        for(i=0;i<2;i++){ 
        if (input.includes(info[i])) 
        {
            
            var exportLink = document.createElement('a');
            exportLink.setAttribute('href', 'data:text/csv;base64,' + window.btoa(info));
        } else 
        {
            console.log("no");
        }
    }
     console.log("find " + info);
     exportLink.appendChild(document.createTextNode('new contacts.csv'));
     document.getElementById('results').appendChild(exportLink);
    };
    

    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsText(fileInput.files[0]);

    // console.log ("event data = " + fileInput);
};

fileInput.addEventListener('change', readFile);



                                                