function hit(){
    return (parseInt(prompt()) > parseInt(prompt())) ? 'First' : 'Second';
}

function fortune(){
    var d = new Date();
    var a = d.getMilliseconds();
    if(a%5==0) return "Sim";
    if(a%5==1) return "Não";
    if(a%5==2) return "Talvez";
    if(a%5==3) return "Nunca";
    if(a%5==4) return "Pergunte Novamente";
}

function divide(){
    return (parseInt(prompt()) / parseInt(prompt()));
}

function tnpo(n, i=0){
    if(i==0) n = parseInt(prompt());
    i++;
    if(n==1) return i;
    if(n%2==0) return tnpo(n/2, i);
    return tnpo(3*n+1, i);
}

function d6(n){
    var d = new Date();
    var a = d.getMilliseconds();
    a = a%6;
    if(a!=n) return a;
    if(a==0) return 1;
    return a-1;
}

function selectColor(n){
    a=d6(n);
    if(a==0) return "red";
    if(a==1) return "blue";
    if(a==2) return "yellow";
    if(a==3) return "green";
    if(a==4) return "orange";
    if(a==5) return "purple";
}

function color(){
    var character = document.querySelector('#square');
    var n = 0;
    if(character.style.background == "blue") n = 1;
    if(character.style.background == "yellow") n = 2;
    if(character.style.background == "green") n = 3;
    if(character.style.background == "orange") n = 4;
    if(character.style.background == "purple") n = 5;
    character.style.background = selectColor(n);
}
