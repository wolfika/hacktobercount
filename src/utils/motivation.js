export const getMotivationMessage = count => {
  const messages = {
    0: [
      'Not lookin\' so good yet, but you have time, right?',
      'Go ahead, make your first PR!',
      'You can do better!',
      'They say it\'s never too late to start!'
    ],
    1: [
      'That wasn\'t so hard after all, was it?',
      'That\'s right. It\'s 25% progress already.',
      'Wonderful! Keep bustin\' those issues!',
      'Hope you enjoyed that one. Go ahead!'
    ],
    2: [
      ':pray: Halfway there, mate!',
      ':pray: You\'re doing great, keep going!',
      ':pray: Nice job, 2 more left.',
      ':pray: 2 done, 2 to go!'
    ],
    3: [
      ':raised_hands: Just one more!',
      ':raised_hands: Squeeze that last one out!',
      ':raised_hands: Finish line, don\'t stop now!',
      ':raised_hands: Keep going!'
    ],
    4: [
      ':checkered_flag: Wow! You made it! Nice job, mate!',
      ':checkered_flag: Congrats! You have beaten Hacktoberfest!',
      ':checkered_flag: Done! Now sit back and wait for those stickers to arrive.',
      ':checkered_flag: Coolio! You did all 4 PRs. Grab a beer and celebrate!'
    ]
  };

  if (count < 0 || count > 4) {
    return 'Ayy, something\'s wrong.';
  }

  return messages[count][Math.floor(Math.random() * messages[count].length)];
};
