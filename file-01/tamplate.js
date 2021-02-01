class Profile{
    
        constructor(name,img,value){
            this.name = name;
            this.img = img;
            this.value = value
        }

}
const name1 = new Profile(
  "H Nazmul Hassan",
  "https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg",
  `
  hello friend,
  I am H nazmul Hassan. I am always very sad because my heart Sabina is not with me`
);

console.log(name1.img);

const card =  document.querySelector('#card');
const cardImg = document.querySelector('#card img');
cardImg.src= name1.img