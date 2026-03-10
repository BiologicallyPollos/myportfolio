const opentype = require('opentype.js');

// Path to Arial font on macOS
const fontPath = '/System/Library/Fonts/ArialHB.ttc';

opentype.load(fontPath, function(err, font) {
    if (err) {
        console.error('Could not load font:', err);
        return;
    }

    const text = 'Josh Funnell';
    const fontSize = 72; // Adjust as needed
    const x = 0;
    let y = 0;

    const path = font.getPath(text, x, y, fontSize);
    console.log(path.toSVG());
});