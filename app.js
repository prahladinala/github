//Init Github
const github = new Github();
//Init UI
const ui = new UI();
// Search Input
const searchUser = document.getElementById("searchUser");
// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make HTTP Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show Alert (in ui.js)
        ui.showAlert("User not Found", "alert alert-danger");
      } else {
        //Show Profile (in ui.js)
        ui.showProfile(data.profile);
        //Show Repos (in ui.js)
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile (in ui.js)
    ui.clearProfile();
  }
});
