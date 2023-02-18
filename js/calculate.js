
//-----------------------------------------------------adding event handler for background color change-------------------


const bodyColorChange = document.getElementById('background-color');

bodyColorChange.addEventListener('mouseover',function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
  
    bodyColorChange.style.backgroundColor = color;

})


//----------------------------------------------adding event handler for triangle card-----------------------------------
document.getElementById('triangle-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-b');
    const convertedInputSecond = convertValueFromString('value-h');


    //applying formula of triangle
    const triangleArea = (0.5*convertedInputFirst*convertedInputSecond).toFixed(2);
    console.log(triangleArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;


    conversionButton();
    
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();



 




    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Triangle Area= " + triangleArea + 'cm2' +"\n";
    
})

//----------------------------------------------adding event handler for rectangle card---------------------------------
document.getElementById('rectangle-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-l');
    const convertedInputSecond = convertValueFromString('value-w');


    //applying formula of triangle
    const rectangleArea = (convertedInputFirst*convertedInputSecond).toFixed(2);
    console.log(rectangleArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    conversionButton();
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Rectangle Area = " + rectangleArea + "cm2"+"\n";
    
})
//----------------------------------------------adding event handler for parallelogram card-------------------------------
document.getElementById('parallelogram-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-base');
    const convertedInputSecond = convertValueFromString('value-height');


    //applying formula of triangle
    const parallelogramArea = (convertedInputFirst*convertedInputSecond).toFixed(2);
    console.log(parallelogramArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    conversionButton();
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Parallelogram  = " + parallelogramArea + "cm2"+"\n";
    
})

//----------------------------------------------adding event handler for rhombus card-------------------------------------
document.getElementById('rhombus-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-d1');
    const convertedInputSecond = convertValueFromString('value-d2');


    //applying formula of triangle
    const rhombusArea = (0.5*convertedInputFirst*convertedInputSecond).toFixed(2);
    console.log(rhombusArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    conversionButton();
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Rhombus Area = " + rhombusArea + "cm2"+"\n";
    
})

//----------------------------------------------adding event handler for pentagon card--------------------------------------
document.getElementById('pentagon-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-perimeter');
    const convertedInputSecond = convertValueFromString('value-apothem');


    //applying formula of triangle
    const pentagonArea = (0.5*convertedInputFirst*convertedInputSecond).toFixed(2);
    console.log(pentagonArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    conversionButton();
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Pentagon Area= " + pentagonArea + "cm2"+"\n";
    
})
//----------------------------------------------adding event handler for ellipse card---------------------------------------
document.getElementById('ellipse-button').addEventListener('click',function(){
    //calling functions for getting converted values from string to number .
    const convertedInputFirst = convertValueFromString('value-a-axis');
    const convertedInputSecond = convertValueFromString('value-b-axis');


    //applying formula of triangle
    const ellipseArea = (Math.PI *convertedInputFirst*convertedInputSecond).toFixed(2);;
    console.log(ellipseArea);

    //getting previous texts inside area of calculation
    const areaForPrevResults = document.getElementById('area-for-results');
    const areaForResults = areaForPrevResults.innerText;
    conversionButton();
    //calling functions for getting serial number inside area of calculation
    let seriall = serial();
    //adding new text with previous texts inside area of calculation
    areaForPrevResults.innerText =  areaForResults + "\n"  + seriall + "." + "Ellipse Area= " + ellipseArea + "cm2"+"\n";
    
})


//---------------------------------------------------calling functions--------------------------------------------
//function for serial number
let serialNumber = 0;
function serial(){
    let serial = serialNumber+1;
    serialNumber = serialNumber+1;
    return serial ;
    

}


//--------------------------------------------------function for validation-------------------------------------
function convertValueFromString(idOfInputFields){

    const valueOfInput = document.getElementById(idOfInputFields);
    const valueOfInputInString = valueOfInput.value;
    console.log(valueOfInputInString);
    if (valueOfInputInString < 0 ){
        alert('Negative values are not accepted')

    }
    else if(valueOfInputInString === ''){
        alert('Give both of the inputs to get result');
    }




    else{
        const valueOfInputInNumber = parseFloat(valueOfInputInString);
        return valueOfInputInNumber;

    }
    
    

}







//----------------------------------go to blog page-----------------------------
document.getElementById('button-div').addEventListener('click', function(){
    location.href="blog.html";





})


function conversionButton(){
    const button = document.createElement('button');
    button.innerText = 'Convert to m2';

    button.addEventListener('click', () => {
    console.log('Button clicked!');
    });

    const buttonContainer = document.getElementById('button-for-conversion');
    buttonContainer.appendChild(button);
}





