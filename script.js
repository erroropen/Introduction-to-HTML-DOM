function validate(e) {
    e.preventdefult();

    const email =
    document.getElementById('email').value;
    const pass =
        document.getElementById('password').value;
        const age =
            document.getElementById('age').value;
            const mesgbox =
                document.getElementById('message').value;


                let message = '';

                if (email === ''){
                    message = 'please enter an email.';
                    mesgbox.style.color = 'red';
                }
                else if (pass === ''){
                    message = 'password must be at last 8 characters.';
                    mesgbox.style.color = 'red';
                }else if (age === ''){
                        message = 'age must be between 12 and 50.';
                        mesgbox.style.color = 'red';
                    }
                
                else{
                    message = 'login successful!';
                    mesgbox.style.color = 'green'
                }
                mesgbox.innertext = message;

}