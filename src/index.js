numbers = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
}

function belowHundreed (num) {
  s_num = num.toString();
  if (num == 0) return '';
  if (num % 10 == 0) {
      if (num == 10) return 'ten';
      if (num == 20) return 'twenty';
      if (num == 30) return 'thirty';
      if (num == 40) return 'forty';
      if (num == 50) return 'fifty';
      if (num == 80) return 'eighty';
      return numbers[s_num[0]]+'ty';
  }
  if (num < 20) return numbers[s_num];
  if (num >= 21 && num <= 29) return 'twenty '+numbers[s_num[1]];
  if (num >= 31 && num <= 39) return 'thirty '+numbers[s_num[1]];
  if (num >= 41 && num <= 49) return 'forty '+numbers[s_num[1]];
  if (num >= 51 && num <= 59) return 'fifty '+numbers[s_num[1]];
  if (num >= 81 && num <= 89) return 'eighty '+numbers[s_num[1]];
  else return numbers[s_num[0]]+'ty ' + numbers[s_num[1]];
}

module.exports = function toReadable (number) {
  result = '';
  s_num = number.toString();

  if (number == 0) return 'zero';
  if (number <= 99) return belowHundreed(number);
  if (number % 100 == 0) return numbers[s_num[0]]+' hundred';
  else return numbers[s_num[0]]+' hundred '+belowHundreed(+s_num.substring(1));
}
