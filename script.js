'use strict'

let data = new Date();


let detail = {
  dWeek:data.getDay(),
  day:data.getDate(),
  month:data.getMonth(),
  year:data.getFullYear(),
  hour:data.getHours(),
  minute:data.getMinutes(),
  seconds:data.getSeconds(),

  wordWeek:['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота', 'Воскресенье'],
  wordMonth:[' января ',' февраля ',' марта ',' апреля ',' мая ',' июня ',' июля ',' августа ',' сентября ',' октября ',' ноября ',' декабря '],
  wordHour:[' час ', ' часа ', ' часов '], 
  wordMinute:[' минута ', ' минуты ', ' минут '],
  wordSeconds:[' секунда ', ' секунды ', ' секунд '],

  formattingDayOfTheWeek: function() {
    return detail.wordWeek[detail.dWeek-1];
  },
  formattingMonth: function () {
    return detail.wordMonth[detail.month];
  },
  leadingZero: function (n) {
    return n < 10 ? '0' + n : n;
  },
  declineWord: function(n, text) {
    let c = 0;
    if (n >= 20) {
      c = n % 10;
    } else {
      c = n;
    }

    if (c == 1) {
      return text[0];
    } else if (c >= 2 && c <= 4) {
      return text[1];
    } else {
      return text[2];
    }
  },
  formatDate: function() {
    return detail.leadingZero(detail.day)+'.'+detail.leadingZero(detail.month) + '.' + detail.year;
  },
  formatTime: function() {
    return detail.leadingZero(detail.hour)+':'+detail.leadingZero(detail.minute) + ':' + detail.leadingZero(detail.seconds);
  },
  formatDateToLongString: function() {
    return detail.formattingDayOfTheWeek() + ', ' + detail.day + detail.formattingMonth() + detail.year + ' года';
  },
  formatTimeToLongString: function() {
    let hourText = detail.wordHour;
    let minuteText = detail.wordMinute;
    let secondsText = detail.wordSeconds;

    return detail.leadingZero(detail.hour) + detail.declineWord(detail.hour, hourText) + detail.leadingZero(detail.minute) + detail.declineWord(detail.minute, minuteText) + detail.leadingZero(detail.seconds) + detail.declineWord(detail.seconds, secondsText);
  }



}
console.log('Сегодня ' + detail.formatDateToLongString() + ', ' + detail.formatTimeToLongString());

console.log(detail.formatDate() + ' - ' + detail.formatTime());