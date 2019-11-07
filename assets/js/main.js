//yandex
(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter43919119 = new Ya.Metrika({
        id: 43919119,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    } catch (e) { }
  });

  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () {
      n.parentNode.insertBefore(s, n);
    };
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://mc.yandex.ru/metrika/watch.js";

  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else {
    f();
  }
})(document, window, "yandex_metrika_callbacks");

//google

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-96653341-1', 'auto');
ga('send', 'pageview');

// init map
$(document).ready(function () {

  var map;
  var lat = 59.905020;
  var lng = 30.292026;

  map = new window.GMaps({
    div: '#companyMap',
    lng: lng,
    lat: lat,
    scrollwheel: false,
    zoomControl: false,
    disableDoubleClickZoom: false,
    disableDefaultUI: true,
    zoom: 15,
    styles: [
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#d2e7e3'
          }
        ]
      }
    ]
  });

  map.drawOverlay({
    lng: lng,
    lat: lat,
    content: '<div class="overlay">VAG-SERVICE.PRO<div class="overlay_arrow above"></div></div>',
    verticalAlign: 'top',
    horizontalAlign: 'center'
  });

  //switch main phone by interval
  var phones = ['+7 (981) 8878258', '‎+7 (900) 6343131'];
  var switcher = true;
  setInterval(function () {
    switcher = !switcher;
    var node = $('#menu_phone');
    var phone = phones[Number(switcher)];

    debugger;
    node.prop('href', 'tel:+' + phone.replace(/\D/g, ''));
    $('> span', node).text(phone);

  }, 5000);
});

//nav bar fix
$(document).ready(function () {
  $("#navbar-menu").on("affix.bs.affix", function () {
    $("#hero-area").addClass("padded");
  });
  $("#navbar-menu").on("affix-top.bs.affix", function () {
    $("#hero-area").removeClass("padded");
  });
  $('#navbar-menu').on('hidden.bs.collapse', function () {
    $("#hero-area").removeClass("padded");
  });
  $('#navbar-menu').on('show.bs.collapse', function () {
    $("#hero-area").addClass("padded");
  });
});

$(document).ready(function () {
  (function (w, d, c) {
    (w[c] = w[c] || []).push(function () {
      var options = {
        project: 4475751
      };
      try {
        w.top100Counter = new top100(options);
      } catch (e) {
      }
    });
    var n = d.getElementsByTagName("script")[0],
      s = d.createElement("script"),
      f = function () {
        n.parentNode.insertBefore(s, n);
      };
    s.type = "text/javascript";
    s.async = true;
    s.src =
      (d.location.protocol == "https:" ? "https:" : "http:") +
      "//st.top100.ru/top100/top100.js";

    if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
    } else {
      f();
    }
  })(window, document, "_top100q");
});

