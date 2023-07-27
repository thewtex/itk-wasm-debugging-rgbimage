# itk-wasm-debugging-rgbimage

Repository to follow-up on https://discourse.itk.org/t/run-wasm-module-in-web-browser-google-chrom-applying-debugging-to-rgbimage-cxx/5930

Build instructions:

```
git clone https://github.com/thewtex/itk-wasm-debugging-rgbimage
cd itk-wasm-debugging-rgbimage

npm install
npm run build:emscripten
npm run bindgen

cd typescript
npm install
npm run build
npm start
```
