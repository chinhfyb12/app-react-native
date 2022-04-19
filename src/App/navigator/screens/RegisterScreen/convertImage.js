import {Buffer} from 'buffer';
import jpeg from 'jpeg-js';

global.Buffer = Buffer; // very important

export function convertDataURIToBinary(base64) {
  const jpegData = Buffer.from(base64, 'base64');
  const rawImageData = jpeg.decode(jpegData);

  const clampedArray = new Uint8ClampedArray(rawImageData.data.length);
  let i;
  for (i = 0; i < rawImageData.data.length; i += 1) {
    clampedArray[i] = rawImageData.data[i];
  }
  return clampedArray;
}
