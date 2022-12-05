import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";
// CONSTANTS
const fileName = "fileToRead.txt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  // Write your code here
  createReadStream(join(__dirname, `files/${fileName}`)).pipe(process.stdout);
};

await read();
