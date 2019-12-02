iziToast.show({
    timeout: 20000,
    // overlay: true,
    toastOnce: true,
    zindex: 999,
    theme: 'light',
    maxWidth:'430px',
    icon: 'fa fa-bell',
    title: 'Bonjour!',
    message: '<span class="messg">Bonjour monsieur ELamouri</span><br><strong>C\'est Youssef Elmoumen</strong><br>Cette notification a ete realisee<br>par le plugin iziToast',
    position: 'bottomRight',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    progressBarColor: '#661a66',
    image: 'img/admin.jpg',
    imageWidth:120,
    layout: 6,
    iconColor: '#661a66',
    onClosing: function(){
        console.info('callbak messge2!');
    },
    onClosed: function(instance, toast, closedBy){
        console.info('Closed | closedBy: ' + closedBy);
    }
});

$( document ).ready(function( $ ) {
    $( '#mySlider' ).sliderPro({
      width: 1080,
      height: 500,
      orientation: 'vertical',
      loop: false,
      arrows: true,
      buttons: false,
      thumbnailsPosition: 'right',
      thumbnailPointer: true,
      thumbnailWidth: 290,
      breakpoints: {
        800: {
          thumbnailsPosition: 'bottom',
          thumbnailWidth: 270,
          thumbnailHeight: 100
        },
        500: {
          thumbnailsPosition: 'bottom',
          thumbnailWidth: 120,
          thumbnailHeight: 50
        }
      }
    });
  });