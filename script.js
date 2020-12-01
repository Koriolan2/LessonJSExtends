'use strict'

let data = newDate();



let detail = {
  dWeek:data.getDay(),
  day:data.getDate(),
  month:data.getMonth(),
  year:data.getFullYear(),
  hour:data.getHours(),
  minute:data.getMinutes(),
  seconds:data.getSeconds(),
  formattingDayOfTheWeek: function() {
    let str = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота', 'Воскресенье'];
    return str[detail.dWeek-1];
  },
  formattingMonth: function () {
    let str = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    return str[detail.month];
  },
  leadingZero: function (n) {
    return n < 10 ? '0' + n : n;
  },
  declineWord: function(n, only, dual, plural) {
    let c = 0;
    if (n >= 20) {
      c = n % 10;
    } else {
      c = n;
    }

    if (c == 1) {
      return only;
    } else if (c >= 2 && c <= 4) {
      return dual;
    } else {
      return plural;
    }
  },
  formatDate: function() {
    return detail.leadingZero(detail.day)+'.'+detail.leadingZero(detail.month) + '.' + detail.year;
  },
  formatTime: function() {
    return detail.leadingZero(detail.hour)+':'+detail.leadingZero(detail.minute) + ':' + detail.leadingZero(detail.seconds);
  }


}

console.log('Сегодня ' +  detail.formattingDayOfTheWeek() + ', ' + detail.day + ' ' + detail.formattingMonth() + ' ' + detail.year + ' года, ' + detail.hour + detail.declineWord(detail.hour,' час ', ' часа ', ' часов ' + detail.minute + ' ' + detail.declineWord(detail.minute, ' минута ', ' минуты ', ' минут ') + detail.seconds + detail.declineWord(detail.seconds, '  секунда ', ' секунды ', ' секунд ')));

console.log(detail.formatDate() + ' - ' + detail.formatTime());