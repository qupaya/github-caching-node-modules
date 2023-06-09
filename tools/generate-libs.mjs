import { execSync } from 'child_process';

const words = [
  ...new Set([
    'apple',
    'banana',
    'carrot',
    'dog',
    'elephant',
    'frog',
    'guitar',
    'house',
    'ice-cream',
    'jungle',
    'kangaroo',
    'lion',
    'monkey',
    'noodle',
    'ocean',
    'penguin',
    'queen',
    'rabbit',
    'sun',
    'tiger',
    'umbrella',
    'violin',
    'watermelon',
    'xylophone',
    'yacht',
    'zebra',
    'airplane',
    'ball',
    'cat',
    'desk',
    'egg',
    'flower',
    'garden',
    'hat',
    'island',
    'jacket',
    'key',
    'lamp',
    'mango',
    'notebook',
    'orange',
    'piano',
    'rainbow',
    'sunny',
    'table',
    'vase',
    'window',
    'yogurt',
    'zeppelin',
    'apricot',
    'beach',
    'candle',
    'dolphin',
    'ear',
    'feather',
    'globe',
    'hamster',
    'ink',
    'jellyfish',
    'kite',
    'lemon',
    'moon',
    'ninja',
    'octopus',
    'pencil',
    'quilt',
    'rose',
    'sailboat',
    'tulip',
    'unicorn',
    'volcano',
    'whale',
    'yawn',
    'acorn',
    'butterfly',
    'camera',
    'daisy',
    'fire',
    'grape',
    'honey',
    'kiwi',
    'leopard',
    'mushroom',
    'nose',
    'oasis',
    'peacock',
    'quill',
    'river',
    'sunflower',
    'tree',
    'violet',
    'waterfall',
    'blubb',
    'chair',
    'password',
    'dinosaur',
    'son',
    'clothes',
    'minion',
    'fish',
  ]),
];

console.log(`generating ${words.length} libs`);
words.forEach((word) => {
  execSync(`npx nx generate @nx/angular:library lib-${word} --no-interactive`, {
    env: {
      ...process.env,
    },
    stdio: 'inherit',
  });
});
