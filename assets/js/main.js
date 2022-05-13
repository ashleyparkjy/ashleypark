/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// (function ($) {
//   var $window = $(window),
//     $body = $('body'),
//     $sidebar = $('#mainNav');

//   // Breakpoints.
//   breakpoints({
//     xlarge: ['1281px', '1680px'],
//     large: ['981px', '1280px'],
//     medium: ['737px', '980px'],
//     small: ['481px', '736px'],
//     xsmall: [null, '480px'],
//   });

//   // Hack: Enable IE flexbox workarounds.
//   if (browser.name == 'ie') $body.addClass('is-ie');

//   // Play initial animations on page load.
//   $window.on('load', function () {
//     window.setTimeout(function () {
//       $body.removeClass('is-preload');
//     }, 100);
//   });

//   // Forms.

//   // Hack: Activate non-input submits.
//   $('form').on('click', '.submit', function (event) {
//     // Stop propagation, default.
//     event.stopPropagation();
//     event.preventDefault();

//     // Submit form.
//     $(this).parents('form').submit();
//   });

//   // Sidebar.
//   if ($sidebar.length > 0) {
//     var $sidebar_a = $sidebar.find('a');

//     $sidebar_a
//       .addClass('scrolly')
//       .on('click', function () {
//         var $this = $(this);

//         // External link? Bail.
//         if ($this.attr('href').charAt(0) != '#') return;

//         // Deactivate all links.
//         $sidebar_a.removeClass('active');

//         // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
//         $this.addClass('active').addClass('active-locked');
//       })
//       .each(function () {
//         var $this = $(this),
//           id = $this.attr('href'),
//           $section = $(id);

//         // No section for this link? Bail.
//         if ($section.length < 1) return;

//         // Scrollex.
//         $section.scrollex({
//           mode: 'middle',
//           top: '-20vh',
//           bottom: '-20vh',
//           initialize: function () {
//             // Deactivate section.
//             $section.addClass('inactive');
//           },
//           enter: function () {
//             // Activate section.
//             $section.removeClass('inactive');

//             // No locked links? Deactivate all links and activate this section's one.
//             if ($sidebar_a.filter('.active-locked').length == 0) {
//               $sidebar_a.removeClass('active');
//               $this.addClass('active');
//             }

//             // Otherwise, if this section's link is the one that's locked, unlock it.
//             else if ($this.hasClass('active-locked'))
//               $this.removeClass('active-locked');
//           },
//         });
//       });
//   }

//   // Scrolly.
//   // $('.scrolly').scrolly({
//   //   speed: 1000,
//   //   offset: function () {
//   //     // If <=large, >small, and sidebar is present, use its height as the offset.
//   //     if (
//   //       breakpoints.active('<=large') &&
//   //       !breakpoints.active('<=small') &&
//   //       $sidebar.length > 0
//   //     )
//   //       return $sidebar.height();

//   //     return 0;
//   //   },
//   // });

//   // Spotlights.
//   $('.spotlights > section')
//     .scrollex({
//       mode: 'middle',
//       top: '-10vh',
//       bottom: '-10vh',
//       initialize: function () {
//         // Deactivate section.
//         $(this).addClass('inactive');
//       },
//       enter: function () {
//         // Activate section.
//         $(this).removeClass('inactive');
//       },
//     })
//     .each(function () {
//       var $this = $(this),
//         $image = $this.find('.image'),
//         $img = $image.find('img'),
//         x;

//       // Assign image.
//       $image.css('background-image', 'url(' + $img.attr('src') + ')');

//       // Set background position.
//       if ((x = $img.data('position'))) $image.css('background-position', x);

//       // Hide <img>.
//       $img.hide();
//     });

//   // Features.
//   $('.features').scrollex({
//     mode: 'middle',
//     top: '-20vh',
//     bottom: '-20vh',
//     initialize: function () {
//       // Deactivate section.
//       $(this).addClass('inactive');
//     },
//     enter: function () {
//       // Activate section.
//       $(this).removeClass('inactive');
//     },
//   });
// })(jQuery);

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $banner = $('#banner'),
    $mainNav = $('#mainNav');

  // Breakpoints.
  breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass('alt')) {
    $window.on('resize', function () {
      $window.trigger('scroll');
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass('alt');
      },
      enter: function () {
        $header.addClass('alt');
      },
      leave: function () {
        $header.removeClass('alt');
      },
    });
  }

  // Sidebar.
  if ($mainNav.length > 0) {
    var $mainNav_a = $mainNav.find('a');

    $mainNav_a
      .addClass('scrolly')
      .on('click', function () {
        var $this = $(this);

        // External link? Bail.
        if ($this.attr('href').charAt(0) != '#') return;

        // Deactivate all links.
        $mainNav_a.removeClass('active');

        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this.addClass('active').addClass('active-locked');
      })
      .each(function () {
        var $this = $(this),
          id = $this.attr('href'),
          $section = $(id);

        // No section for this link? Bail.
        if ($section.length < 1) return;

        // Scrollex.
        $section.scrollex({
          mode: 'middle',
          top: '-20vh',
          bottom: '-20vh',
          initialize: function () {
            // Deactivate section.
            $section.addClass('inactive');
          },
          enter: function () {
            // Activate section.
            $section.removeClass('inactive');

            // No locked links? Deactivate all links and activate this section's one.
            if ($mainNav_a.filter('.active-locked').length == 0) {
              $mainNav_a.removeClass('active');
              $this.addClass('active');
            }

            // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass('active-locked'))
              $this.removeClass('active-locked');
          },
        });
      });
  }

  $(window).on('scroll', function () {
    var currentPos = $(window).scrollTop();

    $('#mainNav li a').each(function () {
      var sectionLink = $(this);

      // capture the height of the navbar
      var navHeight = $('#mainNav').outerHeight() + 1;
      var section = $(sectionLink.attr('href'));

      // subtract the navbar height from the top of the section
      if (
        section.position().top - navHeight <= currentPos &&
        sectionLink.offset().top + section.height() > currentPos
      ) {
        $('#mainNav li').removeClass('active');
        sectionLink.parent().addClass('active');
      } else {
        sectionLink.parent().removeClass('active');
      }
    });
  });
  // Scrolly.
  // $('.scrolly').scrolly({
  //   speed: 1000,
  //   offset: function () {
  //     // If <=large, >small, and mainNav is present, use its height as the offset.
  //     if (
  //       breakpoints.active('<=large') &&
  //       !breakpoints.active('<=small') &&
  //       $mainNav_a.length > 0
  //     )
  //       return $mainNav_a.height();

  //     return 0;
  //   },
  // });

  // Menu.
  var $menu = $('#menu');

  $menu._locked = false;

  $menu._lock = function () {
    if ($menu._locked) return false;

    $menu._locked = true;

    window.setTimeout(function () {
      $menu._locked = false;
    }, 350);

    return true;
  };

  $menu._show = function () {
    if ($menu._lock()) $body.addClass('is-menu-visible');
  };

  $menu._hide = function () {
    if ($menu._lock()) $body.removeClass('is-menu-visible');
  };

  $menu._toggle = function () {
    if ($menu._lock()) $body.toggleClass('is-menu-visible');
  };

  $menu
    .appendTo($body)
    .on('click', function (event) {
      event.stopPropagation();

      // Hide.
      $menu._hide();
    })
    .find('.inner')
    .on('click', '.close', function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Hide.
      $menu._hide();
    })
    .on('click', function (event) {
      event.stopPropagation();
    })
    .on('click', 'a', function (event) {
      var href = $(this).attr('href');

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $menu._hide();

      // Redirect.
      window.setTimeout(function () {
        window.location.href = href;
      }, 350);
    });

  $body
    .on('click', 'a[href="#menu"]', function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $menu._toggle();
    })
    .on('keydown', function (event) {
      // Hide on escape.
      if (event.keyCode == 27) $menu._hide();
    });
})(jQuery);
