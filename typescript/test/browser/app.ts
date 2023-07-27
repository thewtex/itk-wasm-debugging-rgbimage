import * as rgbimageBindings from '../../dist/bundles/rgbimage-bindings.js'
rgbimageBindings.setPipelinesBaseUrl('/pipelines')

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