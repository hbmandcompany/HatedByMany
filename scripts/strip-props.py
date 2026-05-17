import sys

path = sys.argv[1]
lines = open(path, encoding="utf-8").read().splitlines()
out = []
for l in lines:
    s = l.strip()
    if s.startswith(("initial=", "animate=", "whileInView=", "viewport=", "transition=")):
        continue
    if "vyshyvanka-border" in l or "MarqueeStrip" in l:
        continue
    if 'className="orb ' in l or "className='orb " in l:
        continue
    if "import { fade }" in l:
        continue
    l = l.replace(" {...fade}", "").replace("{...fade} ", "").replace("{...fade}", "")
    out.append(l)
open(path, "w", encoding="utf-8").write("\n".join(out) + "\n")
