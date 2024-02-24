document.addEventListener("DOMContentLoaded", function () {
  fetch("https://randomuser.me/api/?results=25")
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.getElementById("gallery");
      data.results.forEach((user) => {
        const userProfile = document.createElement("div");
        userProfile.className = "profile";

        const userName = document.createElement("div");
        userName.className = "name";
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userImage = document.createElement("img");
        userImage.src = user.picture.large;
        userImage.alt = `${user.name.first} ${user.name.last}`;

        userProfile.appendChild(userImage);
        userProfile.appendChild(userName);
        gallery.appendChild(userProfile);
      });
    })
    .catch((error) => console.log("Error fetching and parsing data", error));
});
