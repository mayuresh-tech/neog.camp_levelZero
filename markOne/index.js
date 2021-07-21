var readline_sync = require('readline-sync');
var chalk = require('chalk');

var name = readline_sync.question('What is your name? ');
console.log('Welcome! ' + name);
console.log('Let\'s see how much do you know me!\n');

var curr_score = 0;

var questionOne = {
  ques: 'Which language do I like the most? ',
  answer: 'Java',
  score: 2
};

var questionTwo = {
  ques: 'Where do I live? ',
  answer: 'Pune',
  score: 1
};

var questionThree = {
  ques: 'What post was at CSI Student Chapter MMCOE? ',
  answer: 'Vice President',
  score: 2
};

var questionFour = {
  ques: 'What role did I possess in my recent Internship? ',
  answer: 'Backend Developer Intern',
  score: 5
};

var highScoreOne = {
  score: 10,
  name: 'Ahmed'
}

var highScoreTwo = {
  score: 9,
  name: 'Yash'
}

var highScoreThree = {
  score: 7,
  name: 'Pooh'
}

var leaderboard = [highScoreOne, highScoreTwo, highScoreThree];

var questionsList = [questionOne, questionTwo, questionThree, questionFour];

for(var i = 0; i < questionsList.length; i++) {
  var curr_ques = questionsList[i];
  var answer_curr = readline_sync.question(curr_ques.ques);
  if(answer_curr == curr_ques.answer) {
    curr_score += curr_ques.score;
  }
  console.log('\n');
}

if(curr_score === 10) {
    console.log(chalk.green('You scored Highest!!') + chalk.red('\nYour score: ' + name + ' - ' + curr_score));
  }
  else {
  console.log(chalk.green('You scored: ' + name + ' - ' + curr_score));
}

console.log('\n');

console.log('Leaderboards: ');
console.log(chalk.yellowBright('Name \t \t Score'));
for(var i = 0; i < leaderboard.length; i++) {
  high_curr = leaderboard[i];
  console.log(chalk.yellow(high_curr.name + ' \t \t ' + high_curr.score));
}

console.log(chalk.blue('\nThank you for playing! \nHave a great day!'));