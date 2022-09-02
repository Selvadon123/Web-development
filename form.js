function check_validity(){

    var email = document.getElementById("email");
    var u_name = document.getElementById("name");
    var pass = document.getElementById("pass");
    var test="nothing";

    var email_val = false, name_val = false, pass_val = false;

    var email_arr = ["selva@gmail.com",'sugan@gmail.com','kaus@gmail.com'];
    var name_arr = ['selva','sugan','kaus'];

    var pass_arr = [];

    pass_arr["selva@gmail.com"] = "sk3";
    pass_arr['sugan@gmail.com'] = 'sugan123';
    pass_arr['kaus@gamil.com'] = 'kaus122';

    if (email_arr.includes(email.value)){
        email_val = true;
        if (name_arr.includes(u_name.value)){
            name_arr = true;
            if (pass_arr[email.value] == pass.value){
                pass_val = true;
                alert("You have been logged in to the website");
            }else{
                alert("Invalid password");
            }
        }else{
            alert('Invalid Name provided');
        }
    }else{
        alert('Invalid Email address');
        
    }

}

