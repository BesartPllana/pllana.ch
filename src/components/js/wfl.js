/**
 * GO GO GADGET GOOGLE FONTS
 *
 * @author Besart Pllana mail@pllana.ch
 * @copyright 2020 - Besart Pllana
 */

  WebFontConfig = {
    google: { families: [ 'Dosis:400,700:latin', 'Bitter:400,400italic,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
