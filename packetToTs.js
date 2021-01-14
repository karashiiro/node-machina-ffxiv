const fs = require("fs");
const path = require("path");


function convertFile(fileName) {
    const jsFile = fs.readFileSync(path.join(__dirname, `models/actorControl/${fileName}.js`), "utf8");

    const packetType = `${fileName.slice(0, 1).toUpperCase()}${fileName.slice(1)}`
    const implementation = /{([\s\S]+)}.?$/gm.exec(jsFile)[1];

    const tsImplementation = implementation
        .trim()
        .replace(/struct\./g, '')
        .replace(/=/g, ':')
        .replace(/MachinaModels\./g, 'reader.')
        .replace(/\.get/g, '.next')
        .replace(/Uint/g, 'UInt')
        .replace(/\(.*\)/g, '()')
        .replace(/;/g, ',')
        .replace(/ {4}/g, '        ');

    const tsFile = `import { BufferReader } from "../../buffer-reader";
import { ${packetType} } from "../../definitions/${packetType}";

export function ${fileName}(reader: BufferReader): ${packetType} {
    return {
        ${tsImplementation}    
    };
}`;

    const fields = tsImplementation.split('\n').reduce((res, line) => {
        const split = line.split(':');
        if (split.length === 0) {
            return res;
        }
        const fieldName = split[0].trim();
        const dataAccess = split[1] ? split[1].trim() : '';
        let type = 'number';
        if (dataAccess.includes('getString')) {
            type = 'string';
        } else if (dataAccess.includes('Position3')) {
            type = 'Position3';
        }
        return `${res}
        ${fieldName}: ${type};`
    }, '').trim();

    const position3Import = `import { Position3 } from "./Position3";
    
    `;

    const interfaceStr = `${fields.includes('Position3') ? position3Import : ''}export interface ${packetType} {
        ${fields}
    }`

    const outputDir = path.join(__dirname, 'ts');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, `${fileName}.ts`), tsFile);

    const typesOutputDir = path.join(outputDir, 'types');
    if (!fs.existsSync(typesOutputDir)) {
        fs.mkdirSync(typesOutputDir);
    }
    fs.writeFileSync(path.join(typesOutputDir, `${packetType}.ts`), interfaceStr);
}

function convertFiles() {
    const models = path.join(__dirname, `models/actorControl/`);
    const files = fs.readdirSync(models);
    files.forEach(file => {
        const stat = fs.lstatSync(path.join(models, file));
        if (stat.isFile() && file.endsWith('.js') && !file.startsWith('_')) {
            console.log(file);
            convertFile(file.replace('.js', ''));
        }
    })
}

if (process.argv[2]) {
    convertFile(process.argv[2]);
} else {
    convertFiles()
}
