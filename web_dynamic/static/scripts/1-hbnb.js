$(document).ready(function () {
  let list = {};
  $('.amenities > .popover > ul > li').each(function () {
    $(this).change(function () {
      if ($(this).children('input').prop('checked')) {
        list[$(this).children('input').data('id')] = $(this)
          .children('input')
          .data('name');
      } else {
        delete list[$(this).children('input').data('id')];
      }
      let len = Object.keys(list).length;
      let amen = () => {
        let names = '';
        for (amenity in list) {
          if (len > 1) {
            names += list[amenity] + ', ';
          } else {
            names += list[amenity];
          }
          len -= 1;
        }
        return names;
      };
      $('.amenities >h4').text(amen);
    });
  });
});
