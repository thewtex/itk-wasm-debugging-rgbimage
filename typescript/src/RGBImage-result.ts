import { Image } from 'itk-wasm'

interface RGBImageResult {
  /** WebWorker used for computation */
  webWorker: Worker | null

  /** The output image */
  OutputImage: Image

}

export default RGBImageResult
