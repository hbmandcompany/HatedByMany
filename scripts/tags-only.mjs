import fs from 'fs'

const file = process.argv[2]
let t = fs.readFileSync(file, 'utf8')

t = t.replace(/<motion\./g, '<').replace(/<\/motion\./g, '</')
t = t.replace(/ ken-burns/g, '')
t = t.replace(/ animate-drift/g, '')
t = t.replace(/ animate-bounce/g, '')
t = t.replace(
  'className="h-0.5 bg-gradient-to-r from-belarus-red via-champagne to-accent-pine"',
  'className="h-px bg-white/10"',
)
t = t.replace(
  'className="ornament-rule mt-10 w-32"',
  'className="mt-10 h-px w-32 bg-white/15"',
)

fs.writeFileSync(file, t)
