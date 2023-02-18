//----------------------------------------------adding event handler for triangle card----------------------------------------------
document.getElementById('calculate-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-b');
    const convertedInputSecond = convertValueFromString('value-h');


    //appling formula of triangle
    const triangleArea = 0.5*convertedInputFirst*convertedInputSecond;
    console.log(triangleArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Triangle = " + triangleArea + "cm2";
    
})


//---------------------------------------------------calling functions--------------------------------------------
//function for serial number
var serialNumber = 0;
function serial(){
    var serial = serialNumber+1;
    serialNumber = serialNumber+1;
    return serial ;
    

}

function convertValueFromString(idOfInputFields){

    const valueOfBase = document.getElementById(idOfInputFields);
    const valueOfBaseInString = valueOfBase.value;
    const valueOfBaseInNumber = parseFloat(valueOfBaseInString);
    return valueOfBaseInNumber;
    

}



   