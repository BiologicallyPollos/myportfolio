from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

# Load the Arial font
font = TTFont('/System/Library/Fonts/Supplemental/Arial.ttf')

# Get the glyph set
glyph_set = font.getGlyphSet()

# Text to convert
text = 'Josh Funnell'
font_size = 72
scale = font_size / 1000  # Assuming units per em is 1000

# Pen for SVG path
pen = SVGPathPen(glyph_set)

x = 0
for char in text:
    glyph_name = font.getBestCmap()[ord(char)]
    glyph = glyph_set[glyph_name]
    transform_pen = TransformPen(pen, (scale, 0, 0, scale, x, 0))
    glyph.draw(transform_pen)
    x += glyph.width * scale

# Get the SVG path
svg_path = pen.getCommands()

print(svg_path)