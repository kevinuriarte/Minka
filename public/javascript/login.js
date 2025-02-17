async function loginFormHandler(e) {
  e.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Incorrect email or password");
    }
  } else {
    alert("Please enter your email and password.");
  }
}

async function signupFormHandler(e) {
  e.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const login = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (login.ok) {
        alert("Thanks for signing up!");
        document.location.replace("/");
      } else {
        // login failure
        alert(`login.statusText
            Something went wrong while logging you in. Try to login again.`);
      }
    } else {
      alert(`${response.statusText}
        Username or email may already be attached to an account.
        Passwords must be at least 8 characters long.`);
    }
  } else {
    alert("Enter a username, email, and password to sign up for an account.");
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);