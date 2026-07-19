//BOTÕES
const rollBtn = document.getElementById("rollBtn");

const inventoryBtn = document.getElementById("inventoryBtn");

const shopButton = document.getElementById("shopButton");

const upgradeButtons = document.querySelectorAll(".shopItem button");

const inventoryClose = document.getElementById("inventoryClose");

//TEXTOS

const titleElement = document.getElementById("title");

const rarity = document.getElementById("rarity");

const rolls = document.getElementById("rolls");

const inventoryCard = document.getElementById("inventory-card");

const coinsText = document.getElementById("coins");

const shop = document.getElementById("shop");

const oddsElement = document.getElementById("chance");

const animations = [
    "legendary",
    "heroic",
    "mythic",
    "godly",
    "ascend",
    "sirius",
    "superior",
    "refined",
    "mystic",
    "arcane",
    "enchanted",
    "ancient",
    "royal",
    "astral",
    "prismatic",
    "fiveStar",
    "dragonline",
    "radiant",
    "infernal",
    "calm",
    "empyrean",
    "relic",
    "ninetyNine",
    "genesis",
    "eclipse",
    "seraphic",
    "shin",
    "siriusshiny",
    "starlight",
    "ascended",
    "prime",
    "celestial",
    "luminosity",
    "skyline",
    "sovereign",
    "deity"
];
const upgrades = {

    luck: [
        { price: 20, bonus: 2 },
        { price: 100, bonus: 4 },
        { price: 500, bonus: 8 },
        { price: 2500, bonus: 50 },
        { price: 10000, bonus: 100 },
        { price: 50000, bonus: 500 },
        { price: 100000, bonus: 5000 },
        { price: 1000000, bonus: 10000 },
        { price: 5000000, bonus: 100000 },
        { price: 100000000, bonus: 1000000 },
        { price: 1500000000, bonus: 5000000 },
        { price: 5000000000, bonus: 10000000 },
        { price: 10000000000, bonus: 100000000 },
    ],

    coins: [
        { price: 20, bonus: 5 },
        { price: 100, bonus: 10 },
        { price: 500, bonus: 20 },
        { price: 2500, bonus: 50 },
        { price: 10000, bonus: 100 },
        { price: 50000, bonus: 500 },
        { price: 100000, bonus: 5000 },
        { price: 1000000, bonus: 10000 },
        { price: 5000000, bonus: 100000 },
        { price: 100000000, bonus: 1000000 },
        { price: 1500000000, bonus: 5000000 },
        { price: 20000000000, bonus: 10000000 },
        { price: 100000000000, bonus: 100000000 },
    ]
};

//VARIÁVEIS
let totalRolls = 0;
let isRolling = false;
let inventory = [];
let luck = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
let luckLevel = 1;
let coins = 0;
let coinMultiplier = 1;
let luckUpgradeLevel = 0;
let coinUpgradeLevel = 0;


//TITULOS

const titles = [

    {

        name: "[ d e i t y ]",
        odds: 300000,

        visual: {
            gradient: "linear-gradient(135deg, #F0F8FF, #FFFF00)",
            font: "Infernal",
        },

        animation: "deity"

    },

    {

        name: "Sovereign",
        odds: 270000,

        visual: {
            gradient: "linear-gradient(135deg, #020079, #FFFF00, #0021F3)",
            font: "sovereign",
        },

        animation: "sovereign"
    },

    {

        name: "Skyline",
        odds: 230000,

        visual: {
            gradient: "linear-gradient(135deg, #B0E0E6, #7FFFD4)",
            font: "Skyline",

        },

        animation: "skyline"

    },

{

    name: "Luminosity",
    odds: 166000,

    visual: {
        gradient: "linear-gradient(135deg, #f9ea63, #FFEBCD)",
        font: "luminosity",

    },

    animation: "luminosity"


},

    {

        name: "C E L E S T I A L",
        odds: 111111,

        visual: {
            gradient: "linear-gradient(90deg, #fff8f8, #efef6e, #32ed7d, #00aeff, #ff0040, #fff8f8)",
            font: "Dragonline",
        },

        animation: "celestial"

    },

    {

        name: "T H E   P R I M E",
        odds: 100000,

        visual: {
            gradient: "linear-gradient(90deg, #fff8f8, #efef6e, #32ed7d, #00aeff, #ff0040, #fff8f8)",
            font: "seraphic",
        },

        animation: "prime"

    },

    {

        name: "ASCENDED",
        odds: 99999,

        visual: {
            gradient: "linear-gradient(90deg, #49a8ec, #21d999)",
            font: "Ascend",
            letterSpacing: "-10px"
        },

        animation: "ascended"

    },

    {

        name: "Starlight",
        odds: 88000,

        visual: {
            gradient: "linear-gradient(90deg, #fff8f8, #ffff05)",
            font: "Genesis",
            letterSpacing: "-10px"
        },

        animation: "starlight"
    },

    {

        
        name: "Sirius Shiny",
        odds: 84450,

        visual: {
            gradient: "linear-gradient(90deg, #00c8ff, #0066ff)",
            font: "Sirius",
            glow: "rgb(0, 0, 0)"
        },

        animation: "siriusshiny"
    },

    {

        name: "S h i n",
        odds: 80000,

        visual: {
            gradient: "linear-gradient(90deg, #b03ad7, #e4e9eb)",
            font: "Shin",
            letterSpacing: "-10px"
        },

        animation: "shin"

    },

    {

        name: "S e r a p h i c",
        odds: 77777,

        visual: {
            gradient: "linear-gradient(90deg, #9be925, #cf005d)",
            font: "Seraphic",
        },

        animation: "seraphic"

    },

    {

        name: "Eclipse",
        odds: 75000,

        visual: {
            gradient: "linear-gradient(90deg, #ffffff, #000000)",
            font: "Genesis",
            letterSpacing: "-10px"
        },

        animation: "eclipse"

    },

    {

        name: "Genesis",
        odds: 70000,

        visual: {
            gradient: "linear-gradient(90deg, #ffffff, #008ccf)",
            font: "Genesis",
            letterSpacing: "-10px"
        },

        animation: "genesis"

    },

    {

        name: "< I N F E R N A L >",
        odds: 66666,

        visual: {
            gradient:
            "linear-gradient(135deg,#ff0000,#ff5500,#ffcc00,#8b0000,#ff0000)",
            font: "Infernal",
            glow: "rgb(255, 0, 255)"
        },

        animation: "infernal"

    },

    {

        name: "Radiant",
        odds: 60000,

        visual: {
            gradient:
            "linear-gradient(135deg,#ffffff,#fff700,#ffb700,#ffffff)",
            font: "Astral",
            glow: "rgb(224, 98, 255)"
        },

        animation: "radiant"

    },

    {

        name: "D R A G O N L I N E",
        odds: 58000,

        visual: {
            gradient:
            "linear-gradient(135deg,#fff700,#a3ff00,#00ff44,#ffd700)",
            font: "Dragonline",
            glow: "rgb(173, 195, 2)"
        },

        animation: "dragonline"

    },

    {

        name: "5 Star",
        odds: 55555,

        visual: {
            gradient:
            "linear-gradient(135deg,#ff69b4,#ff1493,#ffffff,#ff69b4)",
            font: "Stars",
            glow: "rgb(145, 14, 95)"
        },

        animation: "fiveStar"

    },

    {

        name: "Prismatic",
        odds: 49999,

        visual: {
            gradient:
            "linear-gradient(135deg,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)",
            font: "Prismatic",
            glow: "rgb(61, 42, 228)"
        },

        animation: "prismatic"

    },

    {

        name: "Royal",
        odds: 43000,

        visual: {
            gradient:
            "linear-gradient(135deg,#ffd700,#ffec8b,#800080,#4b0082,#ffd700)",
            font: "Royal",
            glow: "rgb(255, 255, 0)"
        },

        animation: "royal"

    },

    {

        name: "Astral",
        odds: 39999,

        visual: {
            gradient:
            "linear-gradient(135deg,#020024,#240046,#3c096c,#5a189a,#00b4d8)",
            font: "Astral",
            glow: "rgba(3, 93, 113, 0.5)"
        },

        animation: "astral"

    },

    {

        name: "Ancient",
        odds: 35500,

        visual: {
            gradient:"linear-gradient(135deg,#020617,#082f49,#0f172a,#164e63)",
            font: "Ancient",
            glow: "rgba(255, 255, 255, 0.5)"
        },

        animation: "ancient"

    },

    {

        name: "ENCHANTED", 
        odds: 30000,

        visual: {

            gradient:
            "linear-gradient(135deg, yellow, gold, orange, yellow)",
            font: "Enchanted",
            glow: "rgba(224, 217, 3, 0.5)"
        },

        animation: "enchanted"

    },

    {

        name: "ARCANE", 
        odds: 28530,

        visual: {
            gradient: "linear-gradient(135deg,green,darkgreen,green,darkgreen)",
            font: "Arcane",
            glow: "rgb(86, 246, 0)"
        },

        animation: "arcane"

    },

    {

        name: "Mystic",
        odds: 25000,

        visual: {
            gradient: "linear-gradient(135deg,#5b00ff,#c000ff,#00aaff,#5b00ff)",
            font: "Mystic",
            glow: "rgba(186, 32, 94, 0.5)"
        },

        animation: "mystic"

    },

    {

        name: "Refined",
        odds: 22222,

        visual: {
            gradient: "linear-gradient(135deg,#ffffff,#94faff,#c0c0c0,#00ffff)",
            font: "Refined",
            glow: "rgba(48, 142, 142, 0.5)"
        },

        animation: "refined"

    },

    {

        name: "Superior",
        odds: 20000,

        visual: {
            gradient: "linear-gradient(135deg,#ffffff,#38bdf8,#2563eb,#ffffff)",
            font: "Superior",
            glow: "rgba(107, 148, 237, 0.5)"
        },

        animation: "superior"

    },

    {

        name: "Sirius",
        odds: 19000,

        visual: {
            gradient: "linear-gradient(135deg,#ffffff,#00c8ff,#0066ff,#ffffff)",
            font: "Sirius",
            glow: "rgb(0, 0, 0)"
        },

        animation: "sirius"

    },

    {

        name: "ASCEND",
        odds: 15000,

        visual: {
            gradient: "linear-gradient(135deg,#ffffff,#8b5cf6,#00eaff,#ffffff)",
            font: "Ascend",
            glow: "rgba(94, 207, 255, 0.5)"
        },

        animation: "ascend"


    },
    {
        name: "Godly",
        odds: 10000,

        visual: {
            gradient: "linear-gradient(135deg, #ffffff, #ffd700, #00ffff, #ff00ff, #ffffff)",
            font: "Game",
            glow: "rgba(225, 0, 255, 0.5)"
        },

        animation: "godly"
    },

    {

        name: "NINENINENINE",
        odds: 9999,

        visual: {
            gradient: "linear-gradient(135deg, #8800ff, #6fff00, #6a00ff)",
            font: "Infernal"
        },

        animation: "ninetyNine"

    },

    {

        name: "Relic",
        odds: 5555,

        visual: {
            gradient: "linear-gradient(135deg, #ff0000, #ff00ff, #ffff00, #00ff00, #0000ff)",
            font: "Comic Sans MS"
        },

        animation: "relic"

    },

    {

        name: "-Mythic-",
        odds: 5000,

        visual: {
            gradient: "linear-gradient(135deg, #8a00ff, #ff00cc, #5b00ff)",
            font: "Royal",
        },

        animation: "mythic"

    },

    {

        name: "Empyrean",
        odds: 3700,

        visual: {
            gradient: "linear-gradient(135deg, #fff700, #ff8000, #ffbf00)",
            font: "Royal",
        },

        animation: "empyrean"



    },

    {
        name: "Heroic",
        odds: 2500,

        visual: {
            color: "#ff0000",
            gradient: "linear-gradient(135deg, #ff8800, #ff0000, #ffcc00)",
            font: "Cinzel"
        },

        animation: "heroic"
    },

    {
        name: "Calm",
        odds: 1000,

        visual: {
            gradient: "linear-gradient(135deg, lightgreen, green)"
        },

        animation: "calm"
    },

    {
        name: "Legendary",
        odds: 500,

        visual: {
            color: "#fffa64",
            font: "Audiowide"
        },

        animation: "legendary"
    },

    {

        name: "Vanilla",
        odds: 250,

        visual: {
            gradient: "linear-gradient(135deg, #fcf891, #eeff00)",
            font: "Comic Sans MS"
        },



    },

    {
        name: "Epic",
        odds: 100,

        visual: {
            color: "#831283",
            font: "Orbitron"
        }
    },

    {
        name: "Rare",
        odds: 20,

        visual: {
            color: "#2e30b1",
            font: "Inter"
        }
    },

    {
        name: "Uncommon",
        odds: 5,

        visual: {
            color: "#00ff00",
            font: "Inter"
        }
    },

    {
        name: "Common",
        odds: 2,

        visual: {
            color: "#fefffe",
            font: "Inter",
        },
    }

    
];

//FAZ O SISTEMA DE ESCOLHER O TÍTULO ALEATÓRIO

function rollTitle() {

    let possibleTitles = [];

    for (let i = 0; i < titles.length; i++) {

        const title = titles[i];

        if (Math.random() < luck / title.odds) {

            possibleTitles.push(title);

        }

    }

    if (possibleTitles.length > 0) {

        return possibleTitles[Math.floor(Math.random() * possibleTitles.length)];

    }

    return titles.find(title => title.name === "Common");

}

//MOSTRAR RESULTADO NA TELA

function displayTitle(winner) {

    titleElement.textContent = winner.name;




    if (winner.visual.gradient) {

        titleElement.style.background = winner.visual.gradient;
        titleElement.style.backgroundClip = "text";
        titleElement.style.webkitBackgroundClip = "text";
        titleElement.style.webkitTextFillColor = "transparent";
        titleElement.style.color = "transparent";

    } else {

        titleElement.style.background = "none";
        titleElement.style.webkitTextFillColor = "initial";
        titleElement.style.color = winner.visual.color;

    }


    if (winner.animation) {

        titleElement.classList.add(winner.animation);

    }

}

//AUMENTAR O CONTADOR DE ROLLS

function updateRolls() {

    





}


//SISTEMA DE ROLL PRINCIPAL

function roll() {

    if (isRolling) return;

        isRolling = true;
        rollBtn.disabled = true;

    const winner = rollTitle();
    
    animateRoll(titleElement, winner);

    totalRolls++;
    rolls.textContent = totalRolls;

    coins += 5 * coinMultiplier;
    updateCoins();

    displayTitle(winner);

    if (!inventory.some(item => item.name === winner.name)) {
        inventory.push(winner);

        console.log(inventory)
        updateInventory();
    }



}


//UPDATE INVENTÁRIO

function updateInventory() {

    inventoryCard.innerHTML = "";

    // Ordena do mais raro para o mais comum
    const sortedInventory = [...inventory].sort((a, b) => b.odds - a.odds);

    sortedInventory.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("inventory-card");

        const title = document.createElement("h3");
        title.textContent = item.name;

        const odds = document.createElement("small");
        odds.textContent = `1 / ${item.odds}`;

        // GRADIENTE
        if (item.visual.gradient) {
            title.style.background = item.visual.gradient;
            title.style.backgroundSize = "400% 100%";
            title.style.backgroundClip = "text";
            title.style.webkitBackgroundClip = "text";
            title.style.webkitTextFillColor = "transparent";
        }

        // COR
        else if (item.visual.color) {
            title.style.color = item.visual.color;
        }

        // FONTE
        if (item.visual.font) {
            title.style.fontFamily = item.visual.font;
        }

        // GLOW
        if (item.visual.glow) {
            title.style.textShadow = item.visual.glow;
        }

        // ANIMAÇÃO
        if (item.animation) {
            title.classList.add(item.animation);
        }

        card.appendChild(title);
        card.appendChild(odds);

        inventoryCard.appendChild(card);
    });

}


//UPDATE LUCK
function updateLuck() {

    luckText.textContent = "x" + luckLevel;

}


//ANIMAÇÃO

function applyVisual(element, title) {

    if (title.visual.gradient) {

        element.style.background = title.visual.gradient;
        element.style.backgroundSize = "400% 100%";
        element.style.backgroundPosition = "0% 50%";
        element.style.backgroundClip = "text";
        element.style.webkitBackgroundClip = "text";
        element.style.webkitTextFillColor = "transparent";

    } else {

        element.style.background = "none";
        element.style.webkitTextFillColor = "initial";
        element.style.color = title.visual.color;

    }

    element.style.fontFamily = title.visual.font;
    element.style.textShadow = title.visual.glow;

}



function animateRoll(titleElement, winner, applyAnimation = true) {

    let speed = 50;
    let elapsed = 0;

    function spin() {

        animations.forEach(animation => {
            titleElement.classList.remove(animation);
        });

        const fake = titles[Math.floor(Math.random() * titles.length)];

        titleElement.textContent = fake.name;


        // remove animações antigas
        if (fake.animation) {
            titleElement.classList.add(fake.animation);

        }


        // aplica visual do fake
        applyVisual(titleElement, fake, false);


        // aplica animação do fake durante o roll
        if (fake.animation) {

            titleElement.classList.add(fake.animation);

        }


        oddsElement.textContent = `1 / ${fake.odds}`;

        titleElement.style.transform = "scale(1.8)";


        elapsed += speed;


        if (elapsed < 1200) {

            speed *= 1.08;

            setTimeout(spin, speed);


        } else {


            // resultado verdadeiro
            titleElement.textContent = winner.name;


            // limpa animações antigas
            animations.forEach(animation => {
                titleElement.classList.remove(animation);
            });


            applyVisual(titleElement, winner);


            oddsElement.textContent = `1 / ${winner.odds}`;

            titleElement.style.transform = "scale(1.6)";


            // aplica animação do vencedor
            if (applyAnimation && winner.animation) {

                titleElement.classList.add(winner.animation);

            }


            isRolling = false;
            rollBtn.disabled = false;

        }

    }


    spin();

}

//MELHORIA COINS

function coinsMultiplier() {

    coins += 20 * coinMultiplier;

    updateCoins();
}

//UPDATE COINS

function updateCoins() {

    coinsText.textContent = "$" +formatCoins(coins);

}

//COINS PARA LETRAS

function formatCoins(coins) {

    const units = [
        { value: 1e15, symbol: "Qd" },
        { value: 1e12, symbol: "T" },
        { value: 1e9, symbol: "B" },
        { value: 1e6, symbol: "M" },
        { value: 1e3, symbol: "K" }
    ];

    for (let unit of units) {

        if (coins >= unit.value) {

            let number = coins / unit.value;

            return number.toFixed(1).replace(".0", "") + unit.symbol;
        }

    }

    return coins;

}
//BOTÃO CLICK

rollBtn.addEventListener("click", roll);

//INVENTÁRIO

inventoryBtn.addEventListener("click", () =>  {

    inventoryMenu.classList.toggle("active");

});

inventoryClose.addEventListener("click", () =>  {

    console.log("click");

    inventoryMenu.classList.remove("active");

});

//BOTÃO DA LOJA

shopButton.addEventListener("click", () => {

    const shop = document.getElementById("shop");

    shop.classList.toggle("open");

});

//UPGRADES

const buttons = document.querySelectorAll(".shopItem button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.upgrade;

        if (type === "luck") {

            if (luckUpgradeLevel >= upgrades.luck.length) return;

            const upgrade = upgrades.luck[luckUpgradeLevel];

            if (coins < upgrade.price) {
                alert("Moedas insuficientes!");
                return;
            }

            coins -= upgrade.price;
            luck += upgrade.bonus;
            luckLevel += upgrade.bonus;

            luckUpgradeLevel++;

            if (luckUpgradeLevel < upgrades.luck.length) {
                button.dataset.price = upgrades.luck[luckUpgradeLevel].price;
                button.textContent = upgrades.luck[luckUpgradeLevel].price + "💰";
            } else {
                button.textContent = "MAX";
                button.disabled = true;
            }

            updateCoins();
            updateLuck();

        }

        if (type === "coins") {

            if (coinUpgradeLevel >= upgrades.coins.length) return;

            const upgrade = upgrades.coins[coinUpgradeLevel];

            if (coins < upgrade.price) {
                alert("Moedas insuficientes!");
                return;
            }

            coins -= upgrade.price;
            coinMultiplier += upgrade.bonus;

            coinUpgradeLevel++;

            if (coinUpgradeLevel < upgrades.coins.length) {
                button.dataset.price = upgrades.coins[coinUpgradeLevel].price;
                button.textContent = upgrades.coins[coinUpgradeLevel].price + "💰";
            } else {
                button.textContent = "MAX";
                button.disabled = true;
            }

            updateCoins();

        }

    });

});


