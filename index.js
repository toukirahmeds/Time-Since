const processCmdLineArgs = require("./processCmdLineArgs");
const processConsoleInput = require("./processConsoleInput");

const cmdLineArgs = process.argv.slice(2, 4);

const main = async () => {
    let result;

    if (cmdLineArgs.length > 0) {
        result = processCmdLineArgs(cmdLineArgs);
    } else {
        result = await processConsoleInput();
    }

    console.log(`\nOutput: ${result?.statement}`);
};

main();
