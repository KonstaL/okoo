const path = require('path');

const CONFIG_FILE_NAME = 'okoo.config.json';


export const exitApp = (failed: boolean) => {
    console.log('\nExiting okoo...\n'.blue);
    process.exitCode = failed ? -1 : 0;
}

export const printAppStart = () => {
        console.log('            OKOO             \n'.underline.blue);
        console.log('Starting parsing'.green);
}

export const getConfigPath = (program: any) => {
    return program.config
        ? path.resolve(__dirname, program.config )
        : path.resolve(process.cwd(), CONFIG_FILE_NAME);
}

export const getExecutionPath = (program: any) => {
    return program.config
        ? path.resolve(process.cwd(), program.config)
        : path.resolve(process.cwd());
}