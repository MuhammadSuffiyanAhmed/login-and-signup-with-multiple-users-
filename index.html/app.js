var allusersData  = []
var users = localStorage.getItem('Users');
if(users !== null){
    allusersData = JSON.parse(users)
};
function sign_up(){
    var first_Name = document.getElementById('fname').value;
    var last_Name = document.getElementById('lname').value;
    var remail = document.getElementById('rsemail').value;
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spass').value;
    var obj = {
        firstName :first_Name,
        LastName : last_Name,
        Re_Email : remail,
        Email :email,
        Password : password,
    }
    allusersData.push(obj);
    localStorage.setItem('Users',JSON.stringify(allusersData));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Signup has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}
function logIn(){
    var Email = document.getElementById('lemail').value;
    var Password = document.getElementById('lpass').value;
    var filterUsers = allusersData.filter(function(Data){
        return Data.Email === Email && Data.Password === Password
    })
    if(filterUsers.length){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          
        
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    };
    

}
function log_out(){
    localStorage.clear()
}
























