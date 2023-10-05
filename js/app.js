// Changes Text Start ############################################
let words = document.querySelectorAll('.word');

words.forEach((word) => {
   let letters = word.textContent.split('');
   word.textContent = "";
   
   letters.forEach((letter) => {
      let span = document.createElement('span')
      span.textContent = letter;
      span.className = 'letter';
      word.append(span);
   })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1';

let changeText = () => {
   let currentWord = words[currentWordIndex];
   let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

   Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
         letter.className = 'letter out';
      }, i * 80);
   })
   nextWord.style.opacity = '1';

   Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = 'letter behind';
      setTimeout(() => {
         letter.className = 'letter in'
      }, 340 + i * 80);
   });

   currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


//  Circle Skills Start ########################################
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
   let dots = elem.getAttribute('data-dots');
   let marked = elem.getAttribute('data-percent');
   let percent = Math.floor(dots*marked/100);
   let points = "";
   let rotate = 360 / dots;

   for(let i = 0; i < dots; i++){
      points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
   }
   elem.innerHTML = points;

   const pointsMarked = elem.querySelectorAll('.points');
   for(let i = 0; i < percent; i++){
      pointsMarked[i].classList.add('marked')
   };
});


// portfolio mixitup mixer ####################################
let mixer = mixitup('.portfolioGallery');


// Active Menu #################################################
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
   let sectionLength = section.length;
   while(--sectionLength && window.scrollY + 97 < section[sectionLength].offsetTop){}
   menuLi.forEach(sec => sec.classList.remove('active'));
   menuLi[sectionLength].classList.add('active');
};
activeMenu();

window.addEventListener('scroll', activeMenu);


// Sticky Navbar #################################################
const header = document.querySelector('header');
window.addEventListener('scroll', function(){
   header.classList.toggle('sticky', this.window.scrollY > 50)
})


// Toggle Icon Navbar #############################################
let menuIcon = document.querySelector('#menuIcon');
let navLists = document.querySelector('.navLists');

menuIcon.onclick = () => {
   menuIcon.classList.toggle("fa-xmark");
   navLists.classList.toggle("open");
}

window.onscroll = () => {
   menuIcon.classList.remove("fa-xmark");
   navLists.classList.remove("open");
}


// Parallax #############################################
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting){
         entry.target.classList.add('showItems')
      }else{
         entry.target.classList.remove('showItems')
      }
   })
});

const scrollScale = document.querySelectorAll('.scrollScale');
scrollScale.forEach((element) => observer.observe(element));

const scrollBottom = document.querySelectorAll('.scrollBottom');
scrollBottom.forEach((element) => observer.observe(element));

const scrollTop = document.querySelectorAll('.scrollTop');
scrollTop.forEach((element) => observer.observe(element));