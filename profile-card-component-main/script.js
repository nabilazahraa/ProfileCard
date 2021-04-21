var clicks = 0;

const followers = document.getElementById("followers");
const buttonf = document.getElementById("btnf");
buttonf.addEventListener("click", function () {
  if (buttonf.innerText === "Follow") {
    buttonf.innerText = "Unfollow";
    clicks += 1;
    followers.innerText = 80 + clicks + "K";
  } else {
    buttonf.innerText = "Follow";
    clicks -= 1;
    followers.innerText = 80 + clicks + "K";
  }
});

const buttonl = document.getElementById("btnl");
const likes = document.getElementById("likes");
buttonl.addEventListener("click", function () {
  if (buttonl.innerText === "Like") {
    buttonl.innerText = "Unlike";
    clicks += 1;
    likes.innerText = 803 + clicks + "K";
  } else {
    buttonl.innerText = "Like";
    clicks -= 1;
    likes.innerText = 803 + clicks + "K";
  }
});

document.querySelector("#loginbtn");
