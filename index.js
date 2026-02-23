const loadLesson = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLessone(data.data));
};

const loadLevelWord=(id)=>{
 const url=` https://openapi.programming-hero.com/api/level/${id}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayLevelWord(data.data))
}


const displayLevelWord=(words)=>{
  // step:1 get the container
  const levelWords=document.getElementById("word-level")
  levelWords.innerHTML=""
  if(words.length==0){
     levelWords.innerHTML = `

    <div class="text-center col-span-full space-y-8 ">
        <img class="w-20 mx-auto" src="./image/alert-error.png" alt="">
        <p class="font-bangla md:text-2xl text-gray-500">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="text-gray-800 md:text-5xl">নেক্সট Lesson এ যান।</h2>
      </div>
    
    `;

  }
  // step:2 get into every lesson
  words.forEach(word => {
    const cardDivWord=document.createElement("div")
    cardDivWord.innerHTML= `
    <div class="bg-white p-10 rounded-lg space-y-4">
            <h1 class="font-bold md:text-2xl">${word.word}</h1>
            <p>meaning /Pronounciation</p>
            <h1 class="md:text-xl text-gray-600">"${word.meaning}/${word.pronunciation}"</h1>
            <div class="flex justify-between">
              <i class="fa-solid fa-circle-info"></i>
              <i class="fa-solid fa-volume-high"></i>
            </div>
          </div>
    
    
    `
    levelWords.append(cardDivWord)
    
  });

}

// loadlessone
const displayLessone = (lesson) => {
  // step:1 get the container
  const levelContainer = document.getElementById("lavel-catogore");
  levelContainer.innerHTML = "";
  for (let les of lesson) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button onclick="loadLevelWord(${les.level_no})" class="btn btn-outline btn-primary text-lg"><i class="fa-solid fa-book-open"></i>Lesson-${les.level_no}</button>`;
    levelContainer.append(btnDiv)
  }
};

loadLesson();
