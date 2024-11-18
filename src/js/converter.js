export class ArrayBufferConverter {
    constructor() {
        this.buffer = null
    }
  
    load(buffer) {
        this.buffer = buffer
    }

    toString() {
        if (!this.buffer) {
            throw new Error("Buffer is not loaded")
        }
  
        const uint8Array = new Uint8Array(this.buffer)
      
        let result = ''

        for (let i = 0; i < uint8Array.length; i++) {
            result += String.fromCharCode(uint8Array[i])

        }

        return result
    }
}

export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2)
      const bufferView = new Uint16Array(buffer)
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i)
      }
      return buffer
    })(data)
  }