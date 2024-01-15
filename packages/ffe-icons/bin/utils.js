const fs = require('fs/promises');

/* Create directory */
const makedirs = async dir => {
    try {
        await fs.mkdir(dir, { recursive: true });
        console.log(`Created ${dir}`);
    } catch (err) {
        throw new Error(`Failed to create directory ${dir}: ${err}`);
    }
};

/* Function: apply
    Utility function to run an async function on an array of arguments in parallel with a concurrency limit.
    Used to download multiple files at once, but with a concurrency limit to avoid overloading the server.
    Arguments:
    - func: async function to run (download)
    - args: array of arguments to pass to the function (array of download objects)
*/
const apply = async (func, args) => {
    const concurrency = 8;
    const results = [];
    let i = 0;
    const next = async () => {
        const j = i++;
        if (j >= args.length) {
            return;
        }
        try {
            results[j] = await func(args[j]);
        } catch (error) {
            console.error(error);
        }
        await next();
    };
    await Promise.all(Array.from({ length: concurrency }, next));
    return results;
};

/* Function: fileExists
    Checks if a file exists at the given path
*/
const fileExists = async filePath => {
    try {
        await fs.access(filePath);
        return true;
    } catch (error) {
        // The file doesn't exist or there was an error accessing it
        return false;
    }
};

module.exports = { makedirs, apply, fileExists };
