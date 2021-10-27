const signinSubmit = () => {
    console.log("Sign in js");

    let email = $("#email").val();
    let password = $("#password").val();

    axios.post('http://agro-app-lpc.herokuapp.com/api/auth', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}