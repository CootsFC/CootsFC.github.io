let vader = [
"breath",
"underestimate force",
"not jedi",
"your father",
"NOO(death)",
"rule together",
"force with luke",
"dont know darkside",
"power darkside",
"failed admiral",
"takecare myself",
"destiny",
"destroy you",
"honored join",
"lack faith",
"dont fail",
"apology",
"impressive",
"unfair",
"truth",
"yes",
"correct",
"good work",
"no",
"what!",
"as you wish"
];

let palpatine = [
"evil laugh",
"good! laugh",
"full power dark",
"as forseen",
"force disturb",
"turn to dark",
"rebel crushed",
"clear feelings",
"so be it",
"you sure",
"patience",
"yessss",
"oh no"
]

let luke = [
"force strong family",
"won't convert",
"stronger dark",
"NO!(dying)",
"force to kill me",
"jedi like father",
"not fight father",
"why i'm here",
"save you",
"let go of hate",
"not afraid",
"dont do",
"keep tight",
"know you mean",
"allright",
"no!",
"got him",
"whats the matter",
"cmon",
"hang on"
]

let yoda = [
"beware dark",
"do or not",
"feel force",
"force kownledge",
"unlearn learn",
"you fail",
"no different",
"laugh",
"oh laugh",
"ahhh",
"no 3"

]

let windu = [
"cloud judge",
"end this",
"force with us",
"not time",
"on council",
"stay out",
"party over",
"you lost",
"don't think so",
"take seat",
"no 2"

]

let quigon = [
"morning",
"remember",
"concentration here",
"greed ally",
"speak not intelligent",
"much to learn",
"don't touch",
"don't sense"
]



let misc = [
"WILHELM 1",
"WILHELM 2",
"WILHELM 3",
"WILHELM 4",
"WILHELM 5",
"WILHELM 6",
"no blasters!",
"LIGHTSABER BATTLE",
"SABER (OBIvVader)",
"SABER (LUKvVader)",
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
    palpatine.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    luke.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    yoda.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    windu.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
    quigon.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
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
createList("/Sounds/palpatine/", palpatine, "Palpatine", ".wav")
createList("/Sounds/stormtrooper/", stormtrooper, "Stormtrooper", ".wav")
createList("/Sounds/luke/", luke, "Luke", ".wav")
createList("/Sounds/yoda/", yoda, "Yoda", ".wav")
createList("/Sounds/windu/", windu, "Windu", ".wav")
createList("/Sounds/quigon/", quigon, "Quigon", ".wav")
createList("/Sounds/rebel/", rebel, "Rebel", ".wav")
createList("/Sounds/misc/", misc, "Misc", ".wav")

