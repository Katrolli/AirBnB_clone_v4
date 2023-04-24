$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
}).done(function (json) {
  if (json['status'] === 'OK') {
    console.log(json);
    $(document).ready(function () {
      $('#api_status').addClass('available');
    });
  } else {
    $('#api_status').removeClass('available');
  }
});
