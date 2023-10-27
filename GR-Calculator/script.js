var display=document.getElementById("display");
var oprator;
var oprand1=0;
var oprand2=0;
var isOp1=true;
var isOprator=false;
display.innerHTML="0";

function enterNumber(x)
{
    
    display.style.backgroundColor="gray";
    if(isOp1)
    {
        display.innerHTML=x.value;    
        isOp1=false;
    }
    else
    {
        display.innerHTML+=x.value;            
    }
    if(isOprator)
    {
        oprand2=display.innerHTML.substring(oprand1.length+1);
    
    }
    else
    {
       oprand1=display.innerHTML;        
    
    }
    
}
function enterOp(x)
{    
    isOprator=true;
    oprator=x.value;
    display.innerHTML+=x.value;    
    
}
function ans(x)
{
    display.innerHTML+=x.value;
    switch(oprator)
    {
        case '+':
                oprand1=parseInt(oprand1)+parseInt(oprand2);
                display.innerHTML+=oprand1;
                break;
        case '-':oprand1=oprand1-oprand2;
                display.innerHTML+=oprand1;
                break;
        case '*':
                oprand1=oprand1*oprand2;            
                display.innerHTML+=oprand1;
                break;
        case '/':oprand1=oprand1/oprand2;
                display.innerHTML+=oprand1;
                break;
        case '%':oprand1=oprand1%oprand2;
                display.innerHTML+=oprand1;
                break;

    }
}
function del()
{
    if(display.innerHTML!="" && display.innerHTML!=0)
    {
        var str,newStr;
        if(isOprator)
        {
            oprand2=display.innerHTML.substring(oprand1.length+1);    
            str=oprand2;
            newStr = str.slice(0, -1);       
            oprand2=newStr;
            display.innerHTML=oprand1 + oprator+ newStr;
        }
        else
        {
            oprand1=display.innerHTML; 
            str=oprand1;
            newStr = str.slice(0, -1);       
            oprand1=newStr;
            display.innerHTML=newStr;
            
        }
        
    }
    else
    {
        display.innerHTML=0;    
    }
}
function clearAll()
{
    display.innerHTML=0;    
    oprand1=0;
    oprand2=0;
    isOp1=true;
    isOprator=false;
    display.style.backgroundColor="gray";
    
}