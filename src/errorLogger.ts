#!/usr/bin/env node

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


// This is just to satisfy typescript compiler about string extensions
interface String {
    red: any
}

module.exports = {

    
    /**
     * Prints an error about failing to parse config file in red
     * @param  {String} errorMsg Additional info about the parsing error
     */
    errorParsingConfig: (errorMsg: String) => {
        console.log(`Error parsing config file: ${errorMsg}`.red);
    },

    
    /**
     * Prints an one line general error in red
     * @param  {String} errorMsg the error msg
     */
    oneLineError: (errorMsg: String) => {
        console.log(errorMsg.red);
    },
}