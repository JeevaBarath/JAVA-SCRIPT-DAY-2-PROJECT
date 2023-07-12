function add(){
    let a= parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById ("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition is"+c;
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button1").innerHTML="Subraction is"+c;
}
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button1").innerHTML="Multiplication is"+c;
}
function mod(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button1").innerHTML="Division is"+c;
}
function square(){
    let a=parseInt(document.getElementById("n1").value);
    let c=a**2;
    document.getElementById("button1").innerHTML="Square is"+c;
    
}
