export async function grabSprints() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
        json.forEach((element,index) => {
          let sprinna = document.querySelector(".sprintContainer");
          let newTodo = document.createElement("div");
          newTodo.setAttribute("class", "todo");
          newTodo.innerHTML = `${index + 1}: ${element.title}`;
          sprinna.append(newTodo);
        });
      });
  }

  export async function getPhotos2() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            let photosContainer = document.querySelector(".photosContainer");
            for (let i = 0; i < 30 && i < json.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', json[i].thumbnailUrl);
                photosContainer.append(image);
            }
        });
}
