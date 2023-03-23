const fs = require('fs');

const file_path = `./tolochinskiy/tolo4in.htm`;

const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').map(e => e.trim()).join('\n');

try {
    const data = fs.readFileSync(file_path, 'utf8');

    const ns = data.replace(/</g, '\n<').replace(/>/g, '>\n');

    const res = removeEmptyLines(ns);
    fs.writeFileSync(file_path, res, {encoding: 'utf8', flag: 'w'});
} catch (err) {
    console.error(err);
}