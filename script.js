let oldNumber='';
let newNumber='';
let Oprator='';
let result='';

function addNumber(Number) {
    if(Oprator==='') {
        document.getElementById("screen").value += Number;
        oldNumber+=Number;
    }
    else  {
        if(newNumber===''){
            document.getElementById("screen").value='';
        }
        document.getElementById("screen").value+=Number;
        newNumber+=Number;
    }
}

function clearscreen() {
    document.getElementById("screen").value = '';
    oldNumber='';
    Oprator='';
    newNumber='';
}

function opration(oprator) {
    Oprator = oprator;
}

function answer() {
    if(Oprator!=='' && newNumber === '') {
        alert("Syntax ERROR!!!");
    }
    else {
        
        let a = parseFloat(oldNumber);
        let b = parseFloat(newNumber);
        
        switch (Oprator) {
            case '/':
                if(b===0) {
                    alert("can't divid by 0");
                    return;
                }
                result=a/b;
            break;
            case '*':
                result=a*b;
            break;
            case '-':
                result=a-b;
            break;
            case '+':
                result=a+b;
            break;
            default:
                return;
        }
            
        oldNumber = result.toString();
        newNumber='';
        Oprator='';
    }
    document.getElementById("screen").value = oldNumber;
}