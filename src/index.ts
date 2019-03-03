#!/usr/bin/env node

const fs = require('fs');
const path = require("path");
const colors = require('colors'); // required in other files
var glob = require('glob-fs')({ gitignore: false });
var program = require('commander');
var mm = require('micromatch');

const errorLogger = require('./errorLogger');
const successLogger = require('./successLogger');

import { exitApp, printAppStart, getConfigPath, getExecutionPath } from './util';
import { OkooConfig } from "./okooConfig";



function parseCliArgs() {
    program
        .version('0.1.0')
        .option('-b, --baseDir <location>', 'Base directory of the files to check')
        .option('-c, --config <location>', 'Config location if not default root')
        .parse(process.argv);
}

function parseConfig(): Promise<OkooConfig> {
    const configPath = getConfigPath(program);

    return new Promise((resolve: any, reject: any) => {
        fs.readFile(configPath, (err: any, data: any) => {
            if (err) {
                errorLogger.oneLineError('Config file not found');
                console.log(`Add 'okoo.config.json' to your project root or give path to it as argument`);
                exitApp(true);
                reject();
            }
            try {
                const config = JSON.parse(data);
                resolve(config);
            } catch (e) {
                console.log(e);
                errorLogger.oneLineError('Invalid config file :(');
                exitApp(true);
                reject();
            }
        });
    })
}

const parseFiles = (config: OkooConfig) => {
    console.log('Parsing project files...');
    if(!program.baseDir) {
        program.baseDir = config.config 
            ? config.config.baseDir || '.'
            : '.'
    }
    const langKeys = Object.keys(config.languages);

    const someArr = langKeys.reduce((acc, val) => {
        return acc.concat(config.languages[val] as any);
    }, []);

    const execPath = getExecutionPath(program);

    glob.readdirPromise('*/**/.*',  {cwd: program.baseDir})
        .then((files: string[]) => files.filter(filepath => {
            const splittedPath = filepath.split('.');
            return config.languages[splittedPath[splittedPath.length -1 ].toLowerCase()]
        }))
        .then((files: string[]) =>  {
            let unMatchedFiles = new Map<string, boolean>();
            files.forEach(filePath => unMatchedFiles.set(filePath, false));

            mm(files, someArr).forEach((matchedFile: string) => {
                unMatchedFiles.delete(matchedFile);
            });

            console.log('Parsing done!');
            successLogger.showResults(files.length - unMatchedFiles.size, Array.from(unMatchedFiles.keys()));
            if (unMatchedFiles.size > 0) {
                exitApp(true);
            } else {
                exitApp(false);
            }
    }).catch((err: any) => {
        throw new Error('failed to look up files')
    });
    
}

function main() {
    printAppStart();
    parseCliArgs();
    parseConfig()
        .then(config => parseFiles(config))
        .catch(err => console.log('Somthing went wrong with config parsing', err));
}

main();




