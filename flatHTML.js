const fs = require('fs');

const file_path = `./tolochinskiy/index.html`;

const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').map(e => e.trim()).join('\n');

const removeTags = (str, tag) => {
    const regexUL = /<\/?ul[^>]*>/g;
    const regexLI = /<\/?li[^>]*>/g;

    return  str.replace(regexUL, '').replace(regexLI, '');
}

try {
    const data = fs.readFileSync(file_path, 'utf8');

    const ns = data.replace(/</g, '\n<').replace(/>/g, '>\n');

    const withoutEmtyLines = removeEmptyLines(ns);
    const withoutLIandULTags = removeTags(withoutEmtyLines);
    fs.writeFileSync(file_path, withoutLIandULTags, {encoding: 'utf8', flag: 'w'});
} catch (err) {
    console.error(err);
}