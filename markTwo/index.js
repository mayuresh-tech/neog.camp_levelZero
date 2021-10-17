var readline_sync = require('readline-sync');
var chalk = require('chalk');

var name = readline_sync.question('What is your name? ');
console.log('Welcome! ' + name);
console.log('Let\'s play some Quiz on Cloud Computing!\n');

var curr_score = 0;

var questionOne = {
  ques: 'Which of the following cloud concept is related to pooling and sharing of resources? ',
  option1: 'Abstraction',
  option2: 'Virtualization',
  answerOption: 2,
  score: 2
};

var questionTwo = {
  ques: 'Which of the following is Cloud Platform by Amazon? ',
  option1: 'Azure',
  option2: 'AWS',
  answerOption: 2,
  score: 2
};

var questionThree = {
  ques: 'Which of the following is the correct full form of SaaS? ',
  option1: 'Software-as-a-Service',
  option2: 'Storage-as-a-Service',
  answerOption: 1,
  score: 2
};

var questionFour = {
  ques: 'Which of the following is the most refined and restrictive service model? ',
  option1: 'CaaS',
  option2: 'PaaS',
  answerOption: 2,
  score: 4
};

var questionFive = {
  ques: 'Which one of the following options can be considered as the Cloud? ',
  option1: 'Hadoop',
  option2: 'Intranet',
  answerOption: 1,
  score: 10
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

var questionsList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i = 0; i < questionsList.length; i++) {
  var curr_ques = questionsList[i];
  console.log(curr_ques.ques + '\n1.' + curr_ques.option1 + '\t' + '2.' + curr_ques.option2);
  var answer_curr = readline_sync.question('Your answer( 1 / 2 ): ');

  if(answer_curr == curr_ques.answerOption) {
    curr_score += curr_ques.score;
    console.log(chalk.green("Correct Answer!! 😊 \nYour current score: " + curr_score));
  }
  else {
    console.log(chalk.red("Wrong Answer 😔 \nYour current score: " + curr_score));
  }
  console.log('\n');
}

if(curr_score === 20) {
    console.log(chalk.green('You scored Highest!!') + chalk.red('\nYour score: ' + name + ' - ' + curr_score));
  }
  else {
  console.log(chalk.green('You scored: ' + name + ' - ' + curr_score));
}

if(curr_score > highScoreOne.score) {
  console.log(chalk.blue('\nCongrats!! You got Rank 1 in Leaderboards! \nPing me and I will update your name in the Leaderboards.'));
}

console.log('\n');

console.log('Leaderboards: ');
console.log(chalk.yellowBright('Name \t \t Score'));
for(var i = 0; i < leaderboard.length; i++) {
  high_curr = leaderboard[i];
  console.log(chalk.yellow(high_curr.name + ' \t \t ' + high_curr.score));
}

console.log(chalk.blue('\nThank you for playing! \nHave a great day!'));