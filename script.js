let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower='abcdefghijklmnopqrstuvwxyz';
let num='1234567890';
let symbol='@$?&';
let strength=0;
function returnChar(str){
    return str.charAt(Math.floor(Math.random()*str.length));
}
function randomIndex(pass)
{
    return Math.floor(Math.random()*pass.length);
}
function generatePassword(){
    let pass=check();
    let password='';
    let len=document.getElementById('range').value;
    if(len>=4)
    for(let i=0;i<len;i++)
    {
        password+=returnChar(pass[randomIndex(pass)]);
    }
    else{
        window.alert('password must be atleast 4 characters');
    }
    document.getElementById('password').innerText=password;
}
function check(){
    let pass=[];
    let ch=document.getElementsByClassName('checkbox');
    if(ch[0].checked)
    pass.push(upper);
    if(ch[1].checked)
    pass.push(lower);
    if(ch[2].checked)
    pass.push(num);
    if(ch[3].checked)
    pass.push(symbol);
    console.log(pass);
    return pass;
}
let range=document.getElementById('range');
range.addEventListener('input',()=>{
    document.getElementById('size').innerText=range.value;
})
