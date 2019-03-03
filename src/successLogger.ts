#!/usr/bin/env node

// This is just to satisfy typescript compiler about string extensions
interface String {
    underline: any;
    red: any;
    green: any;
    blue: any;

}


module.exports = {

    showResults: (filesPassed: number, filesFailed: string[]) =>  {
        console.log('            OKOO RESULTS            \n'.underline.blue)
        console.log(`Files checked: ${filesPassed  + filesFailed.length}`)
        console.log(`Files passed: ${filesPassed}`.green)
        console.log(`Files failed: ${filesFailed.length}`.red);

        if(filesFailed.length){
            console.log('\nList of files that failed:'.underline);
            filesFailed.forEach(filepath => console.log(`- ${filepath}`.red))
        } else {
            console.log('\nOKOO PASSED\n'.green);
        }

    }
}