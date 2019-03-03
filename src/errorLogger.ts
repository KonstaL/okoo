#!/usr/bin/env node

// This is just to satisfy typescript compiler about string extensions
interface String {
    red: any
}


module.exports = {

    errorParsingConfig: (errorMsg: String) => {
        console.log(`Error parsing config file: ${errorMsg}`.red);
    },

    oneLineError: (errorMsg: String) => {
        console.log(errorMsg.red);
    },

    errorSummary: (errorMsg: string[]) => {

    }
}