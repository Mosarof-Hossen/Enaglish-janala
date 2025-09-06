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
    btnDiv.innerHTML = ` <button  onclick="loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson  - ${lesson.level_no} </button>  `;
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



const loadLevelWord= (id)=>{
  // console.log(id)
  const url=`https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then(res=>res.json())
.then((data)=> displayLevelWord(data.data))
}
 
const displayLevelWord= (words)=>{
  // console.log(words)
  const wordContainer=document.getElementById("word-container");
  wordContainer.innerHTML="";
  if(words.length==0){
    wordContainer.innerHTML=`
    <div class="text-center col-span-full space-y-6">
              <img class="mx-auto" src="./assets/alert-error.png" alt="">
              <p class="text-xl font-medium text-gray-500 bangla-font">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। </p>
              <h1 class="font-bold text-6xl bangla-font">নেক্সট Lesson এ যান</h1>
            </div>
    `;
  }
  words.forEach(word => {
    console.log(word);
    const card= document.createElement("div");
    card.innerHTML=`
    <div class="bg-white px-5 py-10 shadow-sm  rounded-xl text-center space-y-5">
              <h1 class="text-3xl font-bold">${word.word ? word.word:"শব্দ পাওয়া যায়নি"}</h1>
              <p class="text-xl">meaning / pronunciation</p>
              <h1 class="text-3xl font-semibold text-gray-500 bangla-font">${word.meaning ? word.meaning: "অর্থ পাওয়া যায়নি "}/ ${word.pronunciation ? word.pronunciation:"pronunciation পাওয়া যায়নি"}</h1>
              <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
                
              </div>
            </div>
    `;

    wordContainer.append(card)
  });
}



