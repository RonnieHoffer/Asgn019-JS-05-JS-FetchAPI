document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("#user-list");
  const leftDiv = document.querySelector('.left-div');
  const rightDiv = document.querySelector('.right-div');
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((e) => e.json())
    .then((apidata) => {
      apidata.forEach((element) => {
        const li = document.createElement("li");
        button = document.createElement("button");
        button.innerText = element.name;
        button.addEventListener('click', (event) => {
          rightDiv.innerHTML = '';
          rightDiv.append(JSON.stringify(element));
        });
        li.append(button);
        ul.append(li);
        leftDiv.append(ul);
      });
    })
    .catch((e) => console.log("ERR", e));
});
