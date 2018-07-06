import { compress, decompress } from "./Cargo.toml";

Object.assign(window, { compress, decompress });


const input = new Uint8Array(Array(256).fill(1));
const compressed = compress(input, 4096, 11, 21);
const output = decompress(compressed, 4096);
console.log({ input, compressed, output });
