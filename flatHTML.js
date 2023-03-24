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

    let result = data;
    result = data.replace(/</g, '\n<').replace(/>/g, '>\n');

    result = removeEmptyLines(result);
    result = removeTags(result);
    result = result.replace(/<br clear="all">/g, '')

    fs.writeFileSync(file_path, result, {encoding: 'utf8', flag: 'w'});
} catch (err) {
    console.error(err);
}