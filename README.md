Two experiments of the brotli encoder / decoder compiled from Rust to WebAssembly.


# brotli-stdweb

Compiled using brotli-stdweb. Needs explicit conversion between `TypedArray<u8>` and `Vec<u8>`, see [here](brotli-stdweb/src/lib.rs).

Hosted Example: https://phiresky.github.io/rust-brotli-wasm/brotli-stdweb/dist/example.html

# brotli-wasm-bindgen

Compiled using [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen). Code is a bit simpler, see [here](brotli-wasm-bindgen/src/lib.rs)

Hosted Example: https://phiresky.github.io/rust-brotli-wasm/brotli-wasm-bindgen/dist/example.html