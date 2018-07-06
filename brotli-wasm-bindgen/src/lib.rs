#![feature(proc_macro, wasm_custom_section, wasm_import_module)]


extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

extern crate brotli;

use std::io::Write;

#[wasm_bindgen]
pub fn compress(input: &[u8], buffer_size: usize, quality: u32, lg_window_size: u32) -> Vec<u8> {
    let mut output = Vec::new();
    {
        let mut writer = brotli::CompressorWriter::new(&mut output, buffer_size, quality, lg_window_size);
        writer.write(input).unwrap();
    }
    return output;
}

#[wasm_bindgen]
pub fn decompress(input: &[u8], buffer_size: usize) -> Vec<u8> {
    let mut output = Vec::new();
    {
        let mut writer = brotli::DecompressorWriter::new(&mut output, buffer_size);
        writer.write(&input).unwrap();
    }
    return output;
}