const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      autoplay: null,
      showThumbs: false,
      games: [
        {
          title: "Marvel's Spiderman: Miles Morales",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
          image: "./assets/img/01.webp",
        },
        {
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
          image: "./assets/img/02.webp",
        },
        {
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          image: "./assets/img/03.webp",
        },
        {
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
          image: "./assets/img/04.webp",
        },
        {
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
          image: "./assets/img/05.webp",
        },
        {
          title: "The Last of Us Parte II",
          text: "The Last of Us Part II is a post-apocalyptic action-adventure game developed by Naughty Dog, featuring the story of Ellie's quest for revenge in a world ravaged by a deadly fungus.",
          image: "./assets/img/06.webp",
        },
        {
          title: "Elden Ring",
          text: "Elden Ring is an upcoming action role-playing game developed by FromSoftware and published by Bandai Namco. The game is set in a dark fantasy world created by both Miyazaki and George R. R. Martin.",
          image: "./assets/img/07.webp",
        },
        {
          title: "The Legend of Zelda: Botw",
          text: "Breath of the Wild (BotW) is an open-world action-adventure game developed and published by Nintendo for the Switch and Wii U consoles, featuring exploration, puzzle-solving, and combat in a vast, immersive world.",
          image: "./assets/img/08.webp",
        },
        {
          title: "Hogwarts Legacy",
          text: "Hogwarts Legacy is an action role-playing video game set in the Wizarding World, allowing players to attend Hogwarts School of Witchcraft and Wizardry in the 1800s and experience a new story written by J.K. Rowling.",
          image: "./assets/img/09.webp",
        },
        {
          title: "Sifu",
          text: "Sifu is a martial arts action game developed by Sloclap, featuring intense one-on-one combat and a journey of revenge and redemption.",
          image: "./assets/img/10.webp",
        },
      ],
    };
  },
  methods: {
    prev() {
      console.log("Prev");
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.games.length - 1;
      }
    },
    next() {
      console.log("Next");
      this.activeImage++;
      if (this.activeImage >= this.games.length) {
        this.activeImage = 0;
      }
    },
    thumbClick(index) {
      this.activeImage = index;
    },
    stopAutoplay() {
      clearInterval(this.autoplay);
      this.showThumbs = true;
    },
    setAutoplay() {
      this.autoplay = setInterval(() => {
        this.nextImage();
        this.showThumbs = false;
      }, 3000);
    },
    nextImage() {
      this.activeImage === this.games.length - 1 ? this.activeImage = 0 : this.activeImage++;
    },
  },
  mounted(){
    this.setAutoplay();
  },
}).mount("#app");
