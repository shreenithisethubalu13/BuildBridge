document.getElementById("registerForm")
.addEventListener("submit", register);

async function register(e){

    e.preventDefault();

    const user={

        fullName:document.getElementById("fullName").value,

        username:document.getElementById("username").value,

        email:document.getElementById("email").value,

        password:document.getElementById("password").value,

        role:document.getElementById("role").value

    };

    try{

        const response=await apiRequest(

            "/api/auth/register",

            "POST",

            user

        );

        if(response.ok){

            alert("Registration Successful!");

            window.location.href="login.html";

        }

        else{

            const text=await response.text();

            alert(text);

        }

    }

    catch(error){

        console.error(error);

        alert("Server Error");

    }

}