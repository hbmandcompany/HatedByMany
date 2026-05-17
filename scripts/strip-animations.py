import re
import sys

path = sys.argv[1]
text = open(path, encoding="utf-8").read()

text = text.replace("<motion.", "<").replace("</motion.", "</")

# Multi-line animation props (non-greedy across newlines)
for prop in ("initial", "animate", "whileInView", "viewport"):
    text = re.sub(
        rf"\s*{prop}=\{{\s*[^}}]*(?:\}}[^}}]*)*\}}\s*",
        "\n",
        text,
        flags=re.DOTALL,
    )

# transition may contain nested objects — strip line-by-line
lines = []
skip = False
depth = 0
for line in text.splitlines():
    stripped = line.strip()
    if not skip and re.match(r"transition=\{", stripped):
        skip = True
        depth = stripped.count("{") - stripped.count("}")
        if depth <= 0:
            skip = False
        continue
    if skip:
        depth += stripped.count("{") - stripped.count("}")
        if depth <= 0:
            skip = False
        continue
    if "{...fade}" in line:
        line = line.replace("{...fade}", "")
    lines.append(line)

text = "\n".join(lines)

text = re.sub(r"\s*<MarqueeStrip items=\{marqueeItems\} />\s*", "\n", text)
text = re.sub(
    r'\s*<div className="vyshyvanka-border[^"]*" />\s*',
    "\n",
    text,
)
text = re.sub(
    r'\s*<motion.div[^>]*scroll-progress[^>]*/>\s*',
    "\n",
    text,
)
text = re.sub(
    r"\s*<div[^>]*scroll-progress[^>]*/>\s*",
    "\n",
    text,
)
text = text.replace(" ken-burns", "")
text = text.replace(" animate-drift", "")
text = text.replace(" animate-bounce", "")
text = text.replace(
    'className="h-0.5 bg-gradient-to-r from-belarus-red via-champagne to-accent-pine"',
    'className="h-px bg-white/10"',
)
text = text.replace(
    'className="ornament-rule mt-10 w-32"',
    'className="mt-10 h-px w-32 bg-white/15"',
)

open(path, "w", encoding="utf-8").write(text)
