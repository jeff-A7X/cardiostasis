//pseudocode
//make array
//fill array with data
//make array number selector
//fill site with data
//retreive arrows
//check if clicked
//arrows clicked changes number selector
//change data in site


window.addEventListener("load", init);
let memberNumber = 0;

let memberPhotos = ['img/aaron.jpg', 'img/jeff2.png', 'img/koen.jpg'];
let memberNames = ['Alex Kokee', 'Jeff Stasis ', "Koen"];
let memberFirstNames = ['Alex', 'Jeff', 'Koen'];
let memberInfo = [  "I’m the lead vocalist, songwriter, and rhythm guitarist for Cardiostasis. I’ve been into loud rock music since I was 14. My influences range from heavy bands like (Acid Bath, Melvins, Death) to alt-rock (Pixies, Sonic Youth, Talking Heads), grunge (Nirvana, Alice In Chains, L7), and the punk and classic icons (Fugazi, Dead Kennedys, Bowie, The Beatles), and much more. That mix shapes my sound and my approach to songwriting.",
  " I'm the lead guitarist and backing vocalist in Cardiostasis, I've always had a huge passion for loud raw heavy and melodic music. All my emotion and energy goes into crafting and enjoying music influenced greatly by bands like Bullet for My Valentine, Trivium, Parkway Drive and other heavy hitting emotional metal bands. Whether on stage, in the studio or even at home, I'm all about the balance of creating the most hard hitting, headbanging riffs and vocals along with producing the most touching and emotional music.",
"ik ben koen lol poep ik hou van radiohoofd en ben retarded"]
let memberInstagram = ['https://www.instagram.com/alex_kokee/', 'https://www.instagram.com/jeff_stasis/', 'https://www.instagram.com/koen_meloen_010/'];
let memberTwitter = ['https://x.com/ThemeParkVex', 'https://x.com/raredutch', 'https://x.com/RyanGosling'];
let memberYoutube = ['https://www.youtube.com/@alexkokee', 'https://www.youtube.com/@jeffstasis', 'https://www.youtube.com/@koenerkeland'];
let playlistSources = ['https://open.spotify.com/embed/playlist/1J9Q7Er9HPo3hxpc95DyJU?utm_source=generator', 'https://open.spotify.com/embed/playlist/1wUKJmb0YvyGoeq3aXJM2C?utm_source=generator', 'https://open.spotify.com/embed/playlist/12uEFYFJLpo42HbBrQUGfZ?utm_source=generator'];





function init() {
    let memberPhotoRetrieve = document.getElementById('member_foto_retrieve');
    let memberNameRetrieve = document.getElementById('memberName');
    let memberInfoRetrieve = document.getElementById('memberDetail');
    let memberInstagramRetrieve = document.getElementById('instagram');
    let memberTwitterRetrieve = document.getElementById('twitter');
    // let memberYoutubeReterieve = document.getElementById('youtube');

    memberPhotoRetrieve.src = memberPhotos[memberNumber];
    memberNameRetrieve.innerHTML = memberNames[memberNumber];
    memberInfoRetrieve.innerHTML = memberInfo[memberNumber];
    memberInstagramRetrieve.href = memberInstagram[memberNumber];
    memberTwitterRetrieve.href = memberTwitter[memberNumber];
    // memberYoutubeReterieve.href = memberYoutube[memberNumber];

    console.log(memberPhotoRetrieve.src)
    addEventListener('click', changeData);
    // meet the member section


    let memberFirstNamesRetrieve = document.getElementById('firstName');
    let memberPlaylistRetrieve = document.querySelector('iframe');
    memberFirstNamesRetrieve = memberFirstNames[memberNumber];
    memberPlaylistRetrieve.src = playlistSources[memberNumber];
}


function changeData(data) {
    if (data.target.id === 'left_arrow_click') {
        memberNumber--;
        if (memberNumber === -1) {
            memberNumber = 2;
        }
    }
    if (data.target.id === 'right_arrow_click') {
        memberNumber++;
        if (memberNumber === 3) {
            memberNumber = 0;
        }
    }


    let memberPhotoRetrieve = document.getElementById('member_foto_retrieve');
    let memberNameRetrieve = document.getElementById('memberName');
    let memberInfoRetrieve = document.getElementById('memberDetail');
    let memberInstagramRetrieve = document.getElementById('instagram');
    let memberTwitterRetrieve = document.getElementById('twitter');
    // let memberYoutubeReterieve = document.getElementById('youtube');

    memberPhotoRetrieve.src = memberPhotos[memberNumber];
    memberNameRetrieve.innerHTML = memberNames[memberNumber];
    memberInfoRetrieve.innerHTML = memberInfo[memberNumber];
    memberInstagramRetrieve.href = memberInstagram[memberNumber];
    memberTwitterRetrieve.href = memberTwitter[memberNumber];
    // memberYoutubeReterieve.href = memberYoutube[memberNumber];


    
    let memberFirstNamesRetrieve = document.getElementById('firstName');
    let memberPlaylistRetrieve = document.querySelector('iframe');
    memberFirstNamesRetrieve.innerHTML = memberFirstNames[memberNumber] + "'s favourites";

    memberPlaylistRetrieve.src = playlistSources[memberNumber];
    

}
