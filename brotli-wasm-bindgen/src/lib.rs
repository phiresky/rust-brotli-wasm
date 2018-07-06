#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wee_alloc;
// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

extern crate brotli;

use std::io::Write;

#[wasm_bindgen]
pub fn compress(arr: &[u8], buffer_size: usize, quality: u32, lg_window_size: u32) -> Vec<u8> {
    let input: Vec<u8> = arr.into();
    let mut output = Vec::new();
    {
        let mut writer = brotli::CompressorWriter::new(&mut output, buffer_size, quality, lg_window_size);
        writer.write(&input).unwrap();
    }
    return output;
}

#[wasm_bindgen]
pub fn decompress(arr: &[u8], buffer_size: usize) -> Vec<u8> {
    let input: Vec<u8> = arr.into();
    let mut output = Vec::new();
    {
        let mut writer = brotli::DecompressorWriter::new(&mut output, buffer_size);
        writer.write(&input).unwrap();
    }
    return output;
}