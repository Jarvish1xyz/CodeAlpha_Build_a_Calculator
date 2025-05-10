let oldNumber='';
let newNumber='';
let newOprator='';
let result='';
let isfloat=false;

function addNumber(Number) {
    if(newOprator==='') {
        document.getElementById("screen").value += Number;
        oldNumber+=Number;

        return oldNumber;
    }
    else  {
        if(newNumber===''){
            document.getElementById("screen").value='';
        }
        document.getElementById("screen").value+=Number;
        newNumber+=Number;
        return newNumber;
    }
}

function clearscreen() {
    document.getElementById("screen").value = '';
    oldNumber='';
    newOprator='';
    newNumber='';
}

function opration(oprator) {
    newOprator = oprator;
}

function answer() {
    if(newOprator!=='' && newNumber === '') {
        alert("Syntax ERROR!!!");
    }
    else {
        
        let a = parseFloat(oldNumber);
        let b = parseFloat(newNumber);
        
        switch (newOprator) {
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
        newOprator='';
    }
    document.getElementById("screen").value = oldNumber;
}

function floating() {
    isfloat=true;
    document.getElementById("screen").value += '.'
}
