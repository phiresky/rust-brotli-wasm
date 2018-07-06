RUSTFLAGS='-C opt-level=z' cargo +nightly build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/brotli_wasm_bindgen.wasm --out-dir target
wasm-gc target/brotli_wasm_bindgen_bg.wasm
wasm-opt -O3 -Oz --duplicate-function-elimination -o target/brotli_wasm_bindgen_bg.wasm target/brotli_wasm_bindgen_bg.wasm
yarn install
yarn run webpack