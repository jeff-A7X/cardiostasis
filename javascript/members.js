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

let memberPhotos = ['img/bandfoto2.png', 'img/memberPhoto1.jpeg', 'img/memberPhoto2.jpeg'];
let memberNames = ['Alex Kokee ,', 'Jeff Stasis ', "Koen"];
let memberInfo = ['lorem qjoibnqwuioebnqwiu ueiqwjeioqwue9ique98qu 89euwqehjoiqwje89-qwu e9wqhuiehuiahiou j9iafhuio',
    'Lead Guitar & Backing Vocals ij2einqjne wniehawiehjiopjwaiop jokvm dkiaofj oiawje iofjaoif jioewaj fa', 'Drumsajhrui ewah ruiheuir hawiur hwiaohr ijewah riuowehaiur hawiurh ewuih ruiewah rui h',];
let memberInstagram = ['https://www.instagram.com/alexkokee/', 'https://www.instagram.com/jeffstasis/', 'https://www.instagram.com/koenerkeland/'];
let memberTwitter = ['https://twitter.com/alexkokee', 'https://twitter.com/jeffstasis', 'https://twitter.com/koenerkeland'];
let memberYoutube = ['https://www.youtube.com/@alexkokee', 'https://www.youtube.com/@jeffstasis', 'https://www.youtube.com/@koenerkeland'];

function init() {
    let memberPhotoRetrieve = document.getElementById('member_foto_retrieve');
    let memberNameRetrieve = document.getElementById('memberName');
    let memberInfoRetrieve = document.getElementById('memberDetail');
    let memberInstagramRetrieve = document.getElementById('instagram');
    let memberTwitterRetrieve = document.getElementById('twitter');
    let memberYoutubeReterieve = document.getElementById('youtube');

    memberPhotoRetrieve.src = memberPhotos[memberNumber];
    memberNameRetrieve.innerHTML = memberNames[memberNumber];
    memberInfoRetrieve.innerHTML = memberInfo[memberNumber];
    memberInstagramRetrieve.href = memberInstagram[memberNumber];
    memberTwitterRetrieve.href = memberTwitter[memberNumber];
    memberYoutubeReterieve.href = memberYoutube[memberNumber];

    console.log(memberPhotoRetrieve.src)
    addEventListener('click', changeData);
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
    let memberYoutubeReterieve = document.getElementById('youtube');

    memberPhotoRetrieve.src = memberPhotos[memberNumber];
    memberNameRetrieve.innerHTML = memberNames[memberNumber];
    memberInfoRetrieve.innerHTML = memberInfo[memberNumber];
    memberInstagramRetrieve.href = memberInstagram[memberNumber];
    memberTwitterRetrieve.href = memberTwitter[memberNumber];
    memberYoutubeReterieve.href = memberYoutube[memberNumber];

}
