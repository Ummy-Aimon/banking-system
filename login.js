function buttonclick(){
    // window.location.href="banking.html"
    const EmailField= document.getElementById("email-field");
    const UserEmail= EmailField.value;
    
    const PassField= document.getElementById("password-field");
    const UserPass= PassField.value;

    if(UserEmail=="abc@gmail.com" && UserPass=="beautiful" ){
    
         window.location.href="banking.html"
    }
}