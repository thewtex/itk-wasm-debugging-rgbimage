import * as rgbimageBindings from '../../dist/bundles/rgbimage-bindings.js'
rgbimageBindings.setPipelinesBaseUrl('/pipelines')
rgbimageBindings.setPipelineWorkerUrl('/web-workers/pipeline.worker.js')

import { readImageFile } from 'itk-wasm'

const packageFunctions = []
for (const [key, val] of Object.entries(rgbimageBindings)) {
  if (typeof val == 'function') {
    packageFunctions.push(key)
  }
}

const pipelineFunctionsList = document.getElementById('pipeline-functions-list')
pipelineFunctionsList.innerHTML = `
<li>
  ${packageFunctions.join('</li>\n<li>')}
</li>
`
console.log(packageFunctions)
console.log(rgbimageBindings)

const inputElement = document.querySelector('#rgbimage-inputs input[name=input-file]')
inputElement.addEventListener('change', async (event) => {
    const files = event.target.files
    console.log(files[0])

    const { webWorker, image } = await readImageFile(null, files[0])
    console.log('input', image)

    function replacer (key, value) {
      if (!!value && value.byteLength !== undefined) {
        return String(value.slice(0, 6)) + '...'
      }
      return value
    }
    const inputMetaDataElement = document.querySelector('#rgbimage-inputs sl-textarea[name=input]')
    inputMetaDataElement.value = JSON.stringify(image, replacer, 2)

    const { OutputImage } = await rgbimageBindings.RGBImage(null, image)
    console.log(OutputImage)
    const outputMetaDataElement = document.querySelector('#rgbimage-inputs sl-textarea[name=output]')
    outputMetaDataElement.value = JSON.stringify(OutputImage, replacer, 2)

})
