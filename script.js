const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const characterCards = document.querySelectorAll(".character-card");


const heroes = {
  "Iron Man": {
    img: "images/ironman.png",
    tag: "Avenger, Tech Genius",
    strength: 85,
    speed: 75,
    intel: 95,
    dura: 80,
    exp: 90,
    ability: "Arc Reactor Suit, Repulsors, Missiles"
  },
  "Captain America": {
    img: "images/captain.png",
    tag: "Avenger, Super Soldier",
    strength: 80,
    speed: 70,
    intel: 75,
    dura: 85,
    exp: 95,
    ability: "Super Soldier Serum, Vibranium Shield"
  },
  "Thor": {
    img: "images/thor.png",
    tag: "God of Thunder",
    strength: 100,
    speed: 85,
    intel: 70,
    dura: 100,
    exp: 85,
    ability: "Mjolnir, Stormbreaker, Lightning"
  },

  "Black Widow": {
    img: "images/blackwidow.png",
    tag: "Master Spy & Assassin",
    strength: 65,
    speed: 70,
    intel: 85,
    dura: 65,
    exp: 95,
    ability: "Martial Arts, Espionage, Gadgets"
  },
  "Hulk": {
    img: "images/hulk.png",
    tag: "Green Goliath",
    strength: 100,
    speed: 70,
    intel: 60,
    dura: 100,
    exp: 80,
    ability: "Superhuman Strength, Regeneration, Rage Power"
  },
  "Spider-Man": {
    img: "images/spidy.png",
    tag: "Friendly Neighborhood Hero",
    strength: 75,
    speed: 90,
    intel: 85,
    dura: 75,
    exp: 70,
    ability: "Spider-Sense, Wall-Crawling, Web-Shooters"
  },
  "Black Panther": {
    img: "images/panther.png",
    tag: "King of Wakanda",
    strength: 80,
    speed: 80,
    intel: 90,
    dura: 80,
    exp: 85,
    ability: "Vibranium Suit, Enhanced Senses, Martial Arts"
  },
  "Doctor Strange": {
    img: "images/dr.png",
    tag: "Master of Mystic Arts",
    strength: 60,
    speed: 65,
    intel: 95,
    dura: 70,
    exp: 90,
    ability: "Magic, Time Manipulation, Astral Projection"
  }
};

characterCards.forEach(card => {
  card.addEventListener("click", () => {
    const heroName = card.textContent.trim();
    const hero = heroes[heroName];

    if (hero) {
      document.getElementById("card-title").textContent = heroName;
      document.getElementById("card-name").textContent = heroName;
      document.getElementById("card-img").src = hero.img;
      document.getElementById("card-img").alt = heroName;
      document.getElementById("card-tag").textContent = hero.tag;
      document.getElementById("stat-strength").textContent = hero.strength;
      document.getElementById("stat-speed").textContent = hero.speed;
      document.getElementById("stat-intel").textContent = hero.intel;
      document.getElementById("stat-dura").textContent = hero.dura;
      document.getElementById("stat-exp").textContent = hero.exp;
      document.getElementById("stat-ability").textContent = hero.ability;
    }

    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
