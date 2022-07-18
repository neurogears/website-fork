$(function() {
  $('.video-link').magnificPopup(
  {
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '<div class="mfp-title"></div>'+
              '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
              
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: function(url) {
            var id;
            id = 'v=';
            url = url.substr(url.lastIndexOf(id)+id.length, url.length).replace('&', '?');
            url += (url.indexOf('?') !== -1 ? '&' : '?') + 'autoplay=1';
            return url;
          },
          src: '//www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
        }
      }
    },
    callbacks: {
      markupParse: function(template, values, item) {
        values.title = item.el.attr('caption');
      }
    },
  });
});