fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => getUserName(json));

function getUserName(json){
    const userName = json.map(e=> e.username)
    console.log('userName', userName)

    const userNameContainer = document.querySelector(".user-name-container");
    let userNameList = document.createElement('li')
    userNameList.innerHTML= userName;
    userNameContainer.appendChild(userNameList)
}

function nowPost(post) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const postTitle = document.querySelector("#post-title");
const postContent = document.querySelector("#post-content");
const submit = document.querySelector("#submit");

postContent.addEventListener("click", function (e) {
  nowPost(postData);
  const postData = {
    title: postTitle.value,
    postcontent: postContent.value,
  };
});
