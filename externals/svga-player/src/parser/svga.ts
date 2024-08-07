import pako from 'pako'
import { decodeMovieEntity } from '../proto/index'
import { IProtoMovieEntity } from '../proto/types'

abstract class SVGAParser {
  static async parse (svgaBuffer: ArrayBuffer): Promise<IProtoMovieEntity> {
    const bufferArray = new Uint8Array(svgaBuffer)
    const buffer = pako.inflate(bufferArray)
    return decodeMovieEntity(buffer)
  }
}

export {
  SVGAParser
}
