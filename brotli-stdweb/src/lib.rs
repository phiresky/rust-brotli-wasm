#![feature(proc_macro)]

#[macro_use]
extern crate stdweb;

extern crate brotli;

use std::io::Write;
use stdweb::js_export;
use stdweb::web::TypedArray;

#[js_export]
pub fn compress(arr: TypedArray<u8>, buffer_size: usize, quality: u32, lg_window_size: u32) -> TypedArray<u8> {
    let input: Vec<u8> = arr.into();
    let mut output = Vec::new();
    {
        let mut writer = brotli::CompressorWriter::new(&mut output, buffer_size, quality, lg_window_size);
        writer.write(&input);
    }
    return (&output[..]).into();
}

#[js_export]
pub fn decompress(arr: TypedArray<u8>, buffer_size: usize) -> TypedArray<u8> {
    let input: Vec<u8> = arr.into();
    let mut output = Vec::new();
    {
        let mut writer = brotli::DecompressorWriter::new(&mut output, buffer_size);
        writer.write(&input);
    }
    return (&output[..]).into();
}