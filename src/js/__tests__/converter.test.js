import { ArrayBufferConverter, getBuffer } from "../converter";

test("Testing load buffer", () => {
    let converter = new ArrayBufferConverter()
    let buffer = getBuffer()

    converter.load(buffer)

    expect(converter.buffer).toEqual(buffer)
})

test("Testing converter to string", () => {
    let converter = new ArrayBufferConverter();
    let buffer = getBuffer();

    converter.load(buffer);

    const result = converter.toString();

    expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});