
(function($) {

/**
 * Layout change.
 */
Drupal.behaviors.combine = {
  attach: function (context) {
    if ($('#webform-client-form-87').length > 0) {
      if ($('.client_img').width() > $('.piece').width()) {
        console.debug($('.piece').width());
        $('.client_img').parent().width($('.piece').width());
      }
    }
  }
};

})(jQuery);
