let vader = [
"estimateforce",
"notjedi",
"yourfather",
"powerdarkside",
"NOO(death)",
"joinruletogether",
"forcewithluke",
"dontknowdarkside",
"failedadmiral",
"impressive",
"takecaremyself",
"unfair",
"destiny",
"destroyyou",
"apology",
"dontfail",
"breath"
];

let luke = [
"force strong family",
"mistaken",
"vader strong dark",
"NO!(dying)",
"force to kill me",
"jedi like father",
"not fight father",
"got him",
"why i'm here",
"save you",
"whats the matter",
"let go of hate",
"dont do",
"not afraid"
]

let vehicle = [
"74-Z Shift"
]

let misc = [
"WILHELM 1",
"WILHELM 2",
"WILHELM 3",
"WILHELM 4",
"WILHELM 5",
"WILHELM 6",
"LIGHTSABER BATTLE",
"BLASTER FIGHT",
"RICOCHET",
"LONG BURST",
"EXPLOSION",
"SPEEDER BIKE",
"AT-AT WALK",
"AT-AT FALL"
]

let stormtrooper = [
"load weapons",
"regular reports",
"blast them",
"identification",
"move along",
"blast door",
"stun",
"terminate her",
"chances",
"max firepower",
"we have them"
]

let rebel = [
"in position",
"on target",
"this is it",
"rebel roll call"
]




function createList(path, soundList, title, ext) {
    let container = document.querySelector(".mainBody");
    const htitle = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = title;
    htitle.appendChild(h3)
    const buttonCont = document.createElement("div")
    buttonCont.setAttribute("id", title)
    buttonCont.setAttribute("class", "btnCont")
    container.appendChild(htitle)
    container.appendChild(buttonCont)
    soundList.forEach(sound => {
        let card = document.createElement("audio");
        card.setAttribute("src", path + sound + ext);
        card.setAttribute("id", sound);
        container.appendChild(card);
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = sound;
        btn.addEventListener('click', () => {
            stopPlaying();
            document.getElementById(sound).play();
        })
        document.getElementById(title).append(btn);
    })
}

function stopPlaying() {
    vader.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    luke.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    // vehicle.forEach(sound => {
    //     const audio = document.getElementById(sound);
    //     audio.pause();
    //     audio.currentTime = 0;
    // })
    misc.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    stormtrooper.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    rebel.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}

createList("/Sounds/vader/", vader, "Vader", ".wav")
createList("/Sounds/stormtrooper/", stormtrooper, "Stormtrooper", ".wav")
createList("/Sounds/luke/", luke, "Luke", ".wav?raw=true")
createList("/Sounds/rebel/", rebel, "Rebel", ".wav")
// createList("sounds/vehicle/", vehicle, "Vehicle", ".wav")
createList("/Sounds/misc/", misc, "Misc", ".wav")

