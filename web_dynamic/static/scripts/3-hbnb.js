$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  contentType: 'application/json; charset=utf-8',
  success: function (data) {
    console.log('succ');
    for (element of data) {
      $(document).ready(function () {
        $('.places').append(() => {
          document.createElement('article').append(`<div class='title_box'>
          <h2>{{ element['name'] }}</h2>
          <div class='price_by_night'>{{ place.price_by_night }}</div>
        </div>`);
        });
      });
    }
  },
  data: JSON.stringify({}),
});
