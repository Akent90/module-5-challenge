$(function () {
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);

    var currentHour = dayjs().hour();

    for (var hour = 9; hour <= 17; hour++) {
      var timeBlock = $('#hour-' + hour);
      timeBlock.removeClass('past present future');

      if (hour < currentHour) {
        timeBlock.addClass('past');
      } else if (hour === currentHour) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }
    }

    $('.saveBtn').click(function() {
      var timeBlockId = $(this).closest('.time-block').attr('id');
      var userInput = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, userInput);
    });

});