rm -rf dist
yarn install
yarn run parcel build --public-url . example.html

outf=dist/Cargo.*
wasm-gc $outf
wasm-opt -O3 -Oz --duplicate-function-elimination -o $outf $outf