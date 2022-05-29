function validate(){
    var name=document.getElementById('n').value;
    if(name==''||name==null){
        document.getElementById('name').innerHTML="!!Enter your name"
        return false
    }
    else{
        document.getElementById('name').innerHTML=""
    }
    var fname=document.getElementById('fn').value
    if(fname==''||fname==null){
        document.getElementById('fname').innerHTML="!!Enter Fathers Name"
        return false
    }
    else{
        document.getElementById('fname').innerHTML=""
    }
    var postal_address=document.getElementById('pa').value
    if(postal_address==''||postal_address==null){
        document.getElementById('padd').innerHTML="!!Enter Postal Address"
        return false
    }
    else{
        document.getElementById('padd').innerHTML=""
    }
    var personal_address=document.getElementById('pera').value
    if(personal_address==''||personal_address==null){
        document.getElementById('peradd').innerHTML="!!Enter personal address"
        return false
    }
    else{
        document.getElementById('peradd').innerHTML=""
    }
    var gender=document.getElementsByName('gender')
    var flag=0
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
             flag+=1
        }

    }
    if(flag==0){
        document.getElementById('gen').innerHTML="!!Fill gender"
        return false
    }
    else{
        document.getElementById('gen').innerHTML=""
    }
    var city=document.querySelector('#city').value
    if(city==""){
        document.getElementById('cities').innerHTML="!!Fill City"
        return false
    }
    else{
        document.getElementById('cities').innerHTML=""
    }
    var course=document.querySelector('#course').value
    if(course==""){
        document.getElementById('courses').innerHTML="!!Fill courses"
        return false
    }
    else{
        document.getElementById('courses').innerHTML=""
    }
    var district=document.querySelector('#district').value
    if(district==""){
        document.getElementById('districts').innerHTML="!!Fill district"
        return false
    }
    else{
    document.getElementById('districts').innerHTML=""
    }
    var state=document.querySelector('#state').value
    if(state==""){
        document.getElementById('states').innerHTML="!!Fill states"
        return false
    }
    else{
    document.getElementById('states').innerHTML=""
    }
    var pincode=document.getElementById('pcode').value
    var p1=/^[0-9]{6}$/;    
    if(!pincode.match(p1)){
        document.getElementById('pincodes').innerHTML="!!Enter pincode2"
        return false
    }
    else{
        document.getElementById('pincodes').innerHTML=""
    }

    var email=document.getElementById('eid').value
    var p2=/^[a-zA-Z0-9]{1,20}\@[a-z]{2,10}\.[a-z]{3}$/;
    if(!email.match(p2)){
        document.getElementById('emailds').innerHTML="!!Enter  mailId"
        return false
    }
    else{
        document.getElementById('emailds').innerHTML=""
    }

    var dob=document.getElementById('dob').value
    var p3=/\d{1,2}\/\d{1,2}\/\d{4}/;
    if(!dob.match(p3)){
        document.getElementById('dateofbirth').innerHTML="!!Enter  dob"
        return false
    }
    else{
        document.getElementById('dateofbirth').innerHTML=""
    }

    var mno=document.getElementById('mobile').value
    var p4=/\d{10}/;
    if(!mno.match(p4)){
        document.getElementById('mno').innerHTML="!!Enter Mobile Number"
        return false
    }
    else{
        document.getElementById('mno').innerHTML=""
    }
    
    var p5=/[a-zA-Z0-9]{5,}/
    var p6=/[!@#$%^&*()]{1,}/
    var orig_pass=document.getElementById('pass').value;
    var conf_pass=document.getElementById('cpass').value;
    if(!(orig_pass.match(p5)&&orig_pass.match(p6))){
        document.getElementById('p').innerHTML="!!Password should contain a minimum of 5 characters and a special character"
        return false;
    }
    else{
        document.getElementById('p').innerHTML=""
    }
    if(orig_pass!=conf_pass){
        document.getElementById('cp').innerHTML="!!Password not matching";
        return false;
    }
    else{
        document.getElementById('cp').innerHTML=""
    }

    alert("Form Submitted Successfully")



    
}