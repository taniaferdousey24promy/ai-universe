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

//----------------------------------------------adding event handler for rectangle card----------------------------------------------
document.getElementById('rectangle-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-l');
    const convertedInputSecond = convertValueFromString('value-w');


    //appling formula of triangle
    const rectangleArea = convertedInputFirst*convertedInputSecond;
    console.log(rectangleArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Rectangle = " + rectangleArea + "cm2";
    
})
//----------------------------------------------adding event handler for parallelogram card----------------------------------------------
document.getElementById('parallelogram-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-base');
    const convertedInputSecond = convertValueFromString('value-height');


    //appling formula of triangle
    const parallelogramArea = convertedInputFirst*convertedInputSecond;
    console.log(parallelogramArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "parallelogram = " + parallelogramArea + "cm2";
    
})

//----------------------------------------------adding event handler for rhombus card----------------------------------------------
document.getElementById('rhombus-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-d1');
    const convertedInputSecond = convertValueFromString('value-d2');


    //appling formula of triangle
    const rhombusArea = 0.5*convertedInputFirst*convertedInputSecond;
    console.log(rhombusArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Rhombus = " + rhombusArea + "cm2";
    
})

//----------------------------------------------adding event handler for pentagon card----------------------------------------------
document.getElementById('pentagon-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-perimeter');
    const convertedInputSecond = convertValueFromString('value-apothem');


    //appling formula of triangle
    const pentagonArea = 0.5*convertedInputFirst*convertedInputSecond;
    console.log(pentagonArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Pentagon = " + pentagonArea + "cm2";
    
})
//----------------------------------------------adding event handler for ellipse card----------------------------------------------
document.getElementById('ellipse-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-a-axis');
    const convertedInputSecond = convertValueFromString('value-b-axis');


    //appling formula of triangle
    const ellipseArea = Math.PI *convertedInputFirst*convertedInputSecond;
    console.log(ellipseArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    
    //calling functions for getting serial number inside area of calculation
    var seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Ellipse = " + ellipseArea + "cm2";
    
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



   