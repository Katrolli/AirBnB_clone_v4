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
      $('.amenities > h4').text(amen);
    });
  });

  $('button').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        $(document).ready(() => {
          $('.places').empty();
          for (element of data) {
            console.log(element);
            $('.places').append(
              `<article id=` +
                element.id +
                `>
          <div class="title_box">
            <h2>` +
                element.name +
                `</h2>
            <div class="price_by_night">` +
                element.price_by_night +
                `</div>
          </div>
          <div class="information">
            <div class="max_guest">
              ` +
                element.max_guest +
                ` Guests
            </div>
            <div class="number_rooms">
              ` +
                element.number_rooms +
                ` Bedrooms
            </div>
            <div class="number_bathrooms">
              ` +
                element.number_bathrooms +
                `Bathrooms
              </div>
          </div>
          <div class="description">` +
                element.description +
                `</div>
        </article>`
            );
          }
        });
      },
      data: JSON.stringify({ amenities: Object.keys(list) }),
    });
  });
});
