/*
    Copyright (C) 2019 Konsta Lehtinen


    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const path = require('path');

const CONFIG_FILE_NAME = 'okoo.config.json';


/** 
 * Exits the app with eiher 0 or -1 exit code depending on
 * whether files passed testing
 * 
 * @param  {boolean} failed Whether the files passed the testing
 */
export const exitApp = (failed: boolean) => {
    console.log('\nExiting okoo...\n'.blue);
    process.exitCode = failed ? -1 : 0;
}

/**
 * Prints that the application is starting
 */
export const printAppStart = () => {
        console.log('            OKOO             \n'.underline.blue);
        console.log('Starting parsing'.green);
}
/**
 * Returns the full path where the okoo config is found 
 * @param  {any} program the commander librarys data object (holds cli args)
 */
export const getConfigPath = (program: any) => {
    return program.config
        ? path.resolve(__dirname, program.config )
        : path.resolve(process.cwd(), CONFIG_FILE_NAME);
}
/**
 * Returns the path where okoo should execute
 * Default value is current working directory
 * @param  {any} program the commander librarys data (holds cli args)
 */
export const getExecutionPath = (program: any) => {
    return program.config
        ? path.resolve(process.cwd(), program.config)
        : path.resolve(process.cwd());
}