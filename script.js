
let re=/^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
let s="aabuddy@fad.";
console.log(re.test(s));

document.querySelector('button').addEventListener('click',goback);

function goback(e){
    
    e.preventDefault();
   let email=document.getElementById("email").value;
   let number=document.getElementById("number").value;
   let postcode=document.getElementById("postcode").value;
   let emergency=document.getElementById("emergency").value;
   let classname,message='';
   if(email=='' ||number=='' ||postcode=='' ||emergency=='')
       {
        classname=`alert alert-danger`;
        message="Please complete the form";
        showalert(classname,message);
        return;
       }

       else{
             
        if(!checkemail(email)){
            showalert(`alert alert-danger`," mail error syntax");
            return;
        }
        if(!checknumber(number)){
            showalert(`alert alert-danger`,"Phone Number error syntax");
            return;
        }
        if(!checkpostcode(postcode)){
            showalert(`alert alert-danger`," Post Code error syntax");
            return;
        }
        if(!checknumber(emergency)){
            showalert(`alert alert-danger`," Emergency Number error syntax");
            return;
        }
         
 
       }
       showalert(`alert alert-success`,"Successful");

}

function checkemail(email){
    let re=/^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    return re.test(email);
        
}

function checknumber(number){
    let re=/^(\+)?(88)?01[0-9]{9}/;
    return re.test(number);
}
function checkpostcode(postcode){
    let re=/^[0-9]{4}$/;
    return re.test(postcode);
}

  function showalert(classname,message) {

    let alerting=document.querySelector('.alert');
    if(alerting)
        alerting.remove();

    let div=document.createElement('div');
    div.className=classname;
    div.appendChild(document.createTextNode(message));

    let container= document.querySelector('.container');
    let form= container.querySelector('form');

    container.insertBefore(div,form);
}