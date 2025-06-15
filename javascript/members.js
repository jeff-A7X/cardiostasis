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

let memberPhotos = ['img/aaron2.jpg', 'img/jeff2.png', 'img/koen2.jpg'];
let memberNames = ['Alex Kokee', 'Jeff Stasis ', "Koen"];
let memberFirstNames = ['Alex', 'Jeff', 'Koen'];
let memberInfo = [  "I’m the lead vocalist, songwriter, and rhythm guitarist for Cardiostasis. I’ve been into loud rock music since I can remember and I started playing guitar at 14. My influences range from heavy bands like (Acid Bath, Melvins, TAD) to alt-rock (Pixies, Sonic Youth, Talking Heads), grunge (Nirvana, Alice In Chains, L7), and punk and classic icons (Fugazi, Dead Kennedys, Bowie, The Beatles), and much more. That mix shapes my sound and my approach to songwriting.",
  " I'm the lead guitarist and backing vocalist in Cardiostasis, also lead guitarist for my 2nd band, Death By Distortion. I've always had a huge passion for loud raw heavy and melodic music. All my emotion and energy goes into crafting and enjoying music influenced greatly by bands like Bullet for My Valentine, Trivium, Parkway Drive and other heavy hitting emotional metal bands. Whether on stage, in the studio or even at home, I'm all about the balance of creating the most hard hitting, headbanging riffs and vocals along with producing the most touching and emotional music.",
"My name is Koen — I’m an 18-year-old drummer with a huge passion for rock and metal. I grew up in a musical family, so rhythm and sound have always been a big part of who I am. I’ve been drumming for a few years now, drawing inspiration from bands like Metallica, Radiohead, Nirvana, and Linkin Park. Whether I’m jamming, recording, or just letting loose behind the kit, music is how I express myself."]
let memberInstagram = ['https://www.instagram.com/alex_kokee/', 'https://www.instagram.com/jeff_stasis/', 'https://www.instagram.com/koen_meloen_010/'];
let memberTwitter = ['https://x.com/ansullen', 'https://x.com/raredutch', 'https://x.com/RyanGosling'];
let memberYoutube = ['https://www.youtube.com/@alexkokee', 'https://www.youtube.com/@jeffstasis', 'https://www.youtube.com/@koenerkeland'];
let playlistSources = ['https://open.spotify.com/embed/playlist/1J9Q7Er9HPo3hxpc95DyJU?utm_source=generator', 'https://open.spotify.com/embed/playlist/76VldsmPgYEkXR550fdLkR?utm_source=generator', 'https://open.spotify.com/embed/playlist/6vo4QN6wAdwcUWJbfF9Mkl?utm_source=generator'];





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
