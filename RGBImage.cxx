
#include "itkPipeline.h"
#include "itkInputImage.h"
#include "itkOutputImage.h"

#include "itkImage.h"
#include "itkRGBPixel.h"

int main(int argc, char *argv[])
{
    constexpr unsigned int Dimension = 2;
    using PixelType = itk::RGBPixel<unsigned char>;
    using ImageType = itk::Image<PixelType, Dimension>;

    itk::wasm::Pipeline pipeline("RGB Image", "create a RGB Image", argc, argv);

    using InputImageType = itk::wasm::InputImage<ImageType>;
    InputImageType inputImage;

    pipeline.add_option("InputImage", inputImage, "The Input image")->required()->type_name("INPUT_IMAGE");

    using OutputImageType = itk::wasm::OutputImage<ImageType>;
    OutputImageType outputImage;

    pipeline.add_option("OutputImage", outputImage, "The output image")->required()->type_name("OUTPUT_IMAGE");

    ITK_WASM_PARSE(pipeline);

    try
    {
        outputImage.Set(inputImage.Get());
    }
    catch (const itk::ExceptionObject &e)
    {
        std::cerr << e << std::endl;
        return EXIT_FAILURE;
    }

    return EXIT_SUCCESS;
}