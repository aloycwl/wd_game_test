display = (id, status) => (document.getElementById(id).style.display = status);
dText = (id, txt) => (document.getElementById(id).innerHTML = txt);
openPopup = () => display('popup', 'block');
closePopup = () => display('popup', 'none');
mainDeclare = () => {
  word = '';
  wordGuess = [];
  wrongGuess = [];
  guessBomb = 0;
  winCount = 1;
  guess = '';
  dif = 0;
};
mainDeclare();
totalWin = 0;
function winCountFunc() {
  var num = 0,
    lettUsed = '',
    count = word.length;
  while (count > 0) {
    count--;
    if (lettUsed.includes(word[count])) {
    } else {
      num++;
      lettUsed += word[count];
    }
  }
  return num;
}
function guessing() {
  dText('rightGuess', 'word progress: ' + wordGuess);
  dText('wrongGuess', 'Wrong guesses: ' + wrongGuess);
  dText('guessesLeft', 'Guesses remaining: ' + guessBomb);
}
function start(d) {
  display('chooseDifficulty', 'none');
  display('mainGame', 'block');
  display('RRguess', 'block');
  word = wordw();
  winCount = winCountFunc();
  guessBomb = word.length * d;
  for (i = 0; i < word.length; i++) wordGuess.push(' _ ');
  guessing();
  console.log(word);
}
function enterGuess() {
  let lett = document.getElementById('guess').value;
  document.getElementById('guess').value = '';
  if (lett.length === 1) {
    if (word.includes(lett) == true) NewCW(lett);
    else if (!wrongGuess.includes(lett)) {
      wrongGuess.push(lett);
      guessBomb--;
    }
  } else if (lett.length < 1) {
  } else guessBomb--;
  if (guessBomb <= 0) gameLose();
  if (winCount <= 0) gameWin();
  guessing();
}
function NewCW(letter) {
  var count = 0;
  winCount--;
  while (count <= word.length - 1)
    if (letter === word[count]) {
      wordGuess[count] = letter;
      count++;
    } else count++;
}
function gameEnd() {
  display('mainGame', 'none');
  display('RRguess', 'none');
  dText('win', `总得分：${totalWin}`);
}
function gameLose() {
  gameEnd();
  display('youLose', 'block');
  dText('correctWordWas', '正确字母为：' + word);
}
function gameWin() {
  totalWin++;
  gameEnd();
  display('youWin', 'block');
}
function restart() {
  gameEnd();
  display('youLose', 'none');
  display('youWin', 'none');
  display('chooseDifficulty', 'block');
  mainDeclare();
}
function wordw() {
  var randomWords = [
    'humor',
    'miniature',
    'amusing',
    'creepy',
    'fact',
    'risk',
    'verse',
    'land',
    'lumpy',
    'holiday',
    'glorious',
    'weigh',
    'brake',
    'pretty',
    'grin',
    'capricious',
    'misty',
    'ignore',
    'certain',
    'sloppy',
    'dress',
    'true',
    'zonked',
    'observation',
    'action',
    'various',
    'want',
    'direful',
    'suck',
    'dress',
    'scarecrow',
    'judge',
    'madly',
    'quizzical',
    'consist',
    'fierce',
    'love',
    'arrest',
    'serve',
    'fit',
    'hug',
    'tan',
    'curve',
    'eatable',
    'tub',
    'race',
    'innocent',
    'open',
    'preach',
    'steady',
    'acoustics',
    'lock',
    'field',
    'arrange',
    'rifle',
    'learned',
    'toe',
    'flow',
    'competition',
    'oatmeal',
    'match',
    'male',
    'measure',
    'loaf',
    'smile',
    'wrestle',
    'dull',
    'food',
    'locket',
    'bell',
    'beg',
    'strengthen',
    'responsible',
    'enchanting',
    'loutish',
    'switch',
    'idea',
    'nine',
    'squeamish',
    'pig',
    'bat',
    'dear',
    'trains',
    'owe',
    'frogs',
    'assorted',
    'lonely',
    'hurry',
    'natural',
    'sun',
    'snow',
    'obnoxious',
    'broken',
    'friend',
    'bright',
    'cake',
    'sour',
    'permit',
    'economic',
    'lovely',
    'quick',
    'van',
    'tempt',
    'apparel',
    'decay',
    'business',
    'adjustment',
    'blushing',
    'makeshift',
    'slippery',
    'load',
    'winter',
    'exist',
    'tongue',
    'country',
    'roll',
    'fast',
    'moor',
    'possess',
    'pat',
    'pass',
    'books',
    'impartial',
    'hospitable',
    'dust',
    'naughty',
    'tacky',
    'produce',
    'committee',
    'fuzzy',
    'judicious',
    'nebulous',
    'stick',
    'ear',
    'copy',
    'friendly',
    'press',
    'distinct',
    'vegetable',
    'upset',
    'venomous',
    'statement',
    'sulky',
    'spell',
    'square',
    'taste',
    'great',
    'thumb',
    'adjoining',
    'chilly',
    'test',
    'ancient',
    'green',
    'badge',
    'work',
    'repeat',
    'free',
    'elderly',
    'doctor',
    'difficult',
    'grubby',
    'approval',
    'turn',
    'vivacious',
    'thundering',
    'cherries',
    'rest',
    'plan',
    'crime',
    'sticks',
    'wealthy',
    'phone',
    'suspend',
    'gullible',
    'fence',
    'note',
    'wall',
    'interest',
    'coil',
    'jump',
    'enchanted',
    'funny',
    'racial',
    'greasy',
    'polish',
    'elbow',
    'smart',
    'bore',
    'crowd',
    'glistening',
    'oval',
    'eggs',
    'nauseating',
    'detailed',
    'veil',
    'coal',
  ];
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}
