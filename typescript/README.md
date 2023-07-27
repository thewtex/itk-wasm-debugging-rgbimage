# rgbimage-bindings

[![npm version](https://badge.fury.io/js/rgbimage-bindings.svg)](https://www.npmjs.com/package/rgbimage-bindings)

> create RGBImage

## Installation

```sh
npm install rgbimage-bindings
```

## Usage

### Browser interface

Import:

```js
import {
  RGBImage,
  setPipelinesBaseUrl,
  getPipelinesBaseUrl,
  setPipelineWorkerUrl,
  getPipelineWorkerUrl,
} from "rgbimage-bindings"
```

#### RGBImage

*create a RGB Image*

```ts
async function RGBImage(
  webWorker: null | Worker,
  InputImage: Image

) : Promise<RGBImageResult>
```

|   Parameter  |   Type  | Description     |
| :----------: | :-----: | :-------------- |
| `InputImage` | *Image* | The Input image |

**`RGBImageResult` interface:**

|    Property   |   Type   | Description                    |
| :-----------: | :------: | :----------------------------- |
| **webWorker** | *Worker* | WebWorker used for computation |
| `OutputImage` |  *Image* | The output image               |

#### setPipelinesBaseUrl

*Set base URL for WebAssembly assets when vendored.*

```ts
function setPipelinesBaseUrl(
  baseUrl: string | URL
) : void
```

#### getPipelinesBaseUrl

*Get base URL for WebAssembly assets when vendored.*

```ts
function getPipelinesBaseUrl() : string | URL
```

#### setPipelineWorkerUrl

*Set base URL for the itk-wasm pipeline worker script when vendored.*

```ts
function setPipelineWorkerUrl(
  baseUrl: string | URL
) : void
```

#### getPipelineWorkerUrl

*Get base URL for the itk-wasm pipeline worker script when vendored.*

```ts
function getPipelineWorkerUrl() : string | URL
```

### Node interface

Import:

```js
import {
  RGBImageNode,
  setPipelinesBaseUrl,
  getPipelinesBaseUrl,
  setPipelineWorkerUrl,
  getPipelineWorkerUrl,
} from "rgbimage-bindings"
```

#### RGBImageNode

*create a RGB Image*

```ts
async function RGBImageNode(
  InputImage: Image

) : Promise<RGBImageNodeResult>
```

|   Parameter  |   Type  | Description     |
| :----------: | :-----: | :-------------- |
| `InputImage` | *Image* | The Input image |

**`RGBImageNodeResult` interface:**

|    Property   |   Type  | Description      |
| :-----------: | :-----: | :--------------- |
| `OutputImage` | *Image* | The output image |
