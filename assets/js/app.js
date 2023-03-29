const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      games: {
        title: [
          'Marvel\'s Spiderman Miles Morale',
          'Ratchet & Clank: Rift Apart',
          'Fortnite',
          'Stray',
          "Marvel's Avengers",
        ],
        text: [
          'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        ],
        images: [
          './assets/img/01.webp',
          './assets/img/02.webp',
          './assets/img/03.webp',
          './assets/img/04.webp',
          './assets/img/05.webp',
        ]
      }
    };
  },
  methods: {
    prev(){
        console.log("Prev")
        this.activeImage--;
        if (this.activeImage < 0){
            this.activeImage = this.game.image.length - 1
        }
    },
    next(){
        console.log("Next")
        this.activeImage++;
        if (this.activeImage >= this.game.image.length){
            this.activeImage = 0
        }
    },
    thumbClick(index){
        this.activeImage = index
    }
}
}).mount("#app");

