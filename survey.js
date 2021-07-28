const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  const answer1 = answer;
  rl.question('Whats your name? Nicknames are also acceptable ', (name) => {
    const answer2 = name;
    rl.question('Whats an activity you like doing? ', (activity) => {
      const answer3 = activity;
      rl.question('What is your favorite color? ', (color) => {
        const answer4 = color;
        rl.question('Which sport is your absolute favourite? ', (sport) => {
          const answer5 = sport;
          rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
            const answer6 = meal;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              const answer7= power;
              rl.question('What is your marital status? ', (status) => {
                const answer8 = status;
                console.log(`${answer2} loves ${answer5}, ${answer2} is ${answer8} and enjoys ${answer3}, favourite color is ${answer4} and favourite food is ${answer6}, the super power that ${answer2} possesses is ${answer7} and thinks node is '${answer1}' `);
  
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});