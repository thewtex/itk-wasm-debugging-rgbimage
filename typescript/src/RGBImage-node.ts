// Generated file. Do not edit.

import {
  Image,
  InterfaceTypes,
  PipelineOutput,
  PipelineInput,
  runPipelineNode
} from 'itk-wasm'

import RGBImageNodeResult from './RGBImage-node-result.js'


import path from 'path'

/**
 * create a RGB Image
 *
 * @param {Image} InputImage - The Input image
 *
 * @returns {Promise<RGBImageNodeResult>} - result object
 */
async function RGBImageNode(
  InputImage: Image

) : Promise<RGBImageNodeResult> {

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

  const pipelinePath = path.join(path.dirname(import.meta.url.substring(7)), '..', 'pipelines', 'RGBImage')

  const {
    returnValue,
    stderr,
    outputs
  } = await runPipelineNode(pipelinePath, args, desiredOutputs, inputs)
  if (returnValue !== 0) {
    throw new Error(stderr)
  }

  const result = {
    OutputImage: outputs[0].data as Image,
  }
  return result
}

export default RGBImageNode
