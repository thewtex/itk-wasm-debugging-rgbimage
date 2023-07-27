// Generated file. Do not edit.

import {
  Image,
  InterfaceTypes,
  PipelineOutput,
  PipelineInput,
  runPipeline
} from 'itk-wasm'

import RGBImageResult from './RGBImage-result.js'


import { getPipelinesBaseUrl } from './pipelines-base-url.js'


import { getPipelineWorkerUrl } from './pipeline-worker-url.js'

/**
 * create a RGB Image
 *
 * @param {Image} InputImage - The Input image
 *
 * @returns {Promise<RGBImageResult>} - result object
 */
async function RGBImage(
  webWorker: null | Worker,
  InputImage: Image

) : Promise<RGBImageResult> {

  const desiredOutputs: Array<PipelineOutput> = [
    { type: InterfaceTypes.Image },
  ]
  const inputs: Array<PipelineInput> = [
    { type: InterfaceTypes.Image, data: InputImage },
  ]

  const args = []
  // Inputs
  args.push('0')
  // Outputs
  args.push('0')
  // Options
  args.push('--memory-io')

  const pipelinePath = 'RGBImage'

  const {
    webWorker: usedWebWorker,
    returnValue,
    stderr,
    outputs
  } = await runPipeline(webWorker, pipelinePath, args, desiredOutputs, inputs, { pipelineBaseUrl: getPipelinesBaseUrl(), pipelineWorkerUrl: getPipelineWorkerUrl() })
  if (returnValue !== 0) {
    throw new Error(stderr)
  }

  const result = {
    webWorker: usedWebWorker as Worker,
    OutputImage: outputs[0].data as Image,
  }
  return result
}

export default RGBImage
