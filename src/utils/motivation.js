const messages = {
  0: [
    'Not lookin\' so good yet, but you have time, right?',
    'Go ahead, make your first PR!',
    'You can do better!',
    'They say it\'s never too late to start!'
  ],
  1: [
    'That wasn\'t so hard after all, was it?',
    'That\'s right. It\'s 20% progress already.',
    'Wonderful! Keep bustin\' those issues!',
    'Hope you enjoyed that one. Go ahead!'
  ],
  2: [
    ':pray: You\'re doing great, keep going!',
    ':pray: Nice job, 3 more left.',
    ':pray: 2 done, 3 to go!'
  ],
  3: [
    ':sunglasses: Just two more!',
    ':sunglasses: You ain\'t gonna stop now, huh?',
    ':sunglasses: Two more, come on!',
    ':sunglasses: 3 done, lovely!',
  ],
  4: [
    ':raised_hands: Just one more!',
    ':raised_hands: Squeeze that last one out!',
    ':raised_hands: Finish line, don\'t stop now!',
    ':raised_hands: Keep going!'
  ],
  5: [
    ':checkered_flag: Wow! You made it! Nice job, mate!',
    ':checkered_flag: Congrats! You have beaten Hacktoberfest!',
    ':checkered_flag: Done! Now sit back and wait for those stickers to arrive.',
    ':checkered_flag: Coolio! You did all 5 PRs. Grab a beer and celebrate!'
  ]
};

export const numberOfNeededPullRequests = Object.keys(messages).length - 1;

export const getMotivationMessage = count => {


  if (count < 0 || count > 5) {
    return 'Ayy, something\'s wrong.';
  }

  return messages[count][Math.floor(Math.random() * messages[count].length)];
};
