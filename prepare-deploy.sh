node -e "let pkg=require('./package.json'); pkg.homepage='https://donfear.github.io/team_work_practice/'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
