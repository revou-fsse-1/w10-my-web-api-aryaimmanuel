async function getAllMovies() {
  const response = await fetch(
    "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/movies"
  );
  const result = await response.json();
  console.log(result);
}

async function getMoviesById(movieId) {
  const response = await fetch(
    "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/movies" + "/" + movieId
  );
  const result = await response.json();
  console.log(result);
}

async function createNewMovies(newMovie) {
  try {
    const params = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await fetch(
      "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/movies",
      params
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

async function deleteMovies(movieId) {
  const params = {
    method: "DELETE",
  };
  const response = await fetch(
    "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/movies" + "/" + movieId,
    params
  );
}

async function updateMovies(updatedMovies) {
  const params = {
    method: "PUT",
    body: JSON.stringify(updatedMovies),
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await fetch(
    "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/movies" +
      "/" +
      updatedMovies.id,
    params
  );
  const result = await response.json();
  console.log(result);
}

// for login register //
const API = "https://642d62ff66a20ec9ce9c0ff7.mockapi.io/users/";

function sendUserData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    });
}

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const sameEmail = users.find((e) => e.email === email);
      if (!email) {
        alert("Please enter your email address");
        console.log(email);
      } else if (!password) {
        alert("Please enter your password");
      } else if (sameEmail !== undefined) {
        alert("Email already registered");
      } else {
        sendUserData();
        alert("success!");
      }
    });
}

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const sameEmailPassword = users.find(
        (e) => e.email === email && e.password === password
      );
      if (!email) {
        alert("Please enter your email address");
        console.log(email);
      } else if (!password) {
        alert("Please enter your password");
      } else if (sameEmailPassword === undefined) {
        alert("Please register your email and password first");
      } else if (sameEmailPassword !== undefined) {
        alert("success!");
      }
    });
}
