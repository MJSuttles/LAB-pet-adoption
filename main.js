const pets = [
    {
      id: 1,
      img: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      typeofPet: "cat",
      favorite: false
    },
    {
        id: 2,
      img: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      typeOfPet: "dino",
      favorite: false
    },
    {
      id: 3,
      img: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      typeOfPet: "dino",
      favorite: false
    },
    {
      id: 4,
      img: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      typeOfPet: "dog",
      favorite: false
    },
    {
      id: 5,
      img: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      typeOfPet: "dog",
      favorite: false
    },
    {
      id: 7,
      img: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 8,
      img: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      typeOfPet: "dino",
      favorite: false
    },
    {
      id: 9,
      img: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 10,
      img: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 11,
      img: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      typeOfPet: "dino",
      favorite: false
    },
    {
      id: 12,
      img: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      typeOfPet: "dog",
      favorite: false
    },
    {
      id: 13,
      img: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      typeOfPet: "dog",
      favorite: true
    },
    {
      id: 14,
      img: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 15,
      img: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 16,
      img: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      typeOfPet: "dino",
      favorite: false
    },
    {
     id: 17,
      img: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg", 
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 18,
      img: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      typeOfPet: "dino",
      favorite: false
    },
    {
      id: 19,
      img: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      typeOfPet: "dog",
      favorite: false
    },
    {
      id: 20,
      img: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      typeOfPet: "cat",
      favorite: false
    },
    {
      id: 21,
      img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      typeOfPet: "dino",
      favorite: false
    },
    {
        id: 22,
      img: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      typeOfPet: "cat",
      favorite: false
    },
    {
        id: 23,
      img: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      typeOfPet: "dog",
      favorite: false
    },
    {
        id: 24,
      img: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      typeOfPet: "dog",
      favorite: false
    },
    {
      id: 25,
      img: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      typeOfPet: "cat",
      favorite: false
    },
    {
        id: 26,
      img: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      typeOfPet: "dog",
      favorite: false
    },
    {
        id: 27,
      img: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      typeOfPets: "dino",
      favorite: false
    },
    {
        id: 28,
      img: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      typeOfPet: "cat",
      favorite: false
    },
    {
        id: 29,
      img: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      typeOfPet: "cat",
      favorite: false
    },
    {
        id: 30,
      img: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      typeOfPet: "dino",
      favorite: false
    }
  ];

  const targetingPets = document.querySelector("#petCards");

let domString = "";
for (const pet of pets) {
  // CARD FROM BOOTSTRAP: https://getbootstrap.com/docs/5.1/components/card/#example Removed the button
  domString += `<div class="card" style="width: 18rem;">
    <h2 class="pet-name">${pet.name}</h2>
    <div class="card-body">
      <img src=${pet.img} class="card-img-top" alt=${pet.name}>
      <h5 class="card-title">${pet.color}</h5>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
    <h2 class="pet-type">${pet.typeOfPet}</h2>
  </div>`;
};

targetingPets.innerHTML = domString;
