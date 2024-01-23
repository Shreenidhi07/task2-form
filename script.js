document.getElementById('myform').addEventListener('submit',function(event){
    event.preventDefault();
    var fname=document.getElementById('firstname').value; 
    var lname=document.getElementById('lastname').value; 
    var mobile=document.getElementById('mobile').value;
    var email=document.getElementById('email').value;
    console.log('First Name:',fname);
    console.log('Last Name:',lname);
    console.log('Mobile:',mobile);
    console.log('Email:',email);

    document.getElementById('1').innerHTML=fname;
    document.getElementById('2').innerHTML=lname;
    document.getElementById('3').innerHTML=mobile;
    document.getElementById('4').innerHTML=email;
});