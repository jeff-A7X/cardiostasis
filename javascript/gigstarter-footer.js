(function() {
  function inject() {
    var socialsSections = document.querySelectorAll('.socials_section');
    socialsSections.forEach(function(section) {
      var link = document.createElement('a');
      link.href = 'https://www.gigstarter.nl/artists/cardiostasis';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'gigstarter-icon';
      var img = document.createElement('img');
      img.src = 'https://gigstarter.s3.amazonaws.com/boek_ons.png';
      img.alt = 'Boek Cardiostasis (gratis mogelijk!)';
      link.appendChild(img);
      section.appendChild(link);
    });

    if (!document.getElementById('gigstarter-sdk')) {
      var js = document.createElement('script');
      js.id = 'gigstarter-sdk';
      js.src = 'https://gigstarter.s3.amazonaws.com/sdk.js';
      var fjs = document.getElementsByTagName('script')[0];
      if (fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
      else document.head.appendChild(js);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
