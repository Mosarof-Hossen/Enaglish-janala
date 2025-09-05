const loadlesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") /// fetch amke responsoe korar pomise
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
  //  console.log(lesson);
  // 1. get the container& empty

  const btnLevel = document.getElementById("btn-level");
  btnLevel.innerHTML = "";

  // 2.get into every lesson
  for (const lesson of lessons) {
    // console.log(lesson)
    //     3.create Elements

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = ` <button  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson  - ${lesson.level_no} </button>  `;
    //     4.append into container

    btnLevel.append(btnDiv);
  }
};

loadlesson();












// const displayLesson = (lessons) => {
//   // console.log(lesson)
//   // 1. get the container &empty;
//   // 2.get into every lessons
//   // 3.create element
//   // 4.append into container
//   const btnLevel = document.getElementById("btn-level");
//   btnLevel.innerHTML = "";

//   for (let lesson of lessons) {
//     const btnDiv = document.createElement("div");
//     btnDiv.innerHTML = `<button  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson</button>`;
//     btnLevel.append(btnDiv);
//   }
// };


