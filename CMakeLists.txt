cmake_minimum_required(VERSION 3.16)

project(RGBImage)

set(CMAKE_CXX_STANDARD 17)

# we always want to build against the WebAssemblyInterface Module
set(itk_components 
    WebAssemblyInterface
    ITKCommon
    )

# WASI or native binaries
if (NOT EMSCRIPTEN)
    set( itk_components
        ${itk_components}
        ITKIOPNG
        # itkiMAGEio # Adds suport for all available image IO modules
    )
endif()

find_package(ITK REQUIRED 
    COMPONENTS ${itk_components}        
)

include(${ITK_USE_FILE})

add_executable(RGBImage RGBImage.cxx)
target_link_libraries(RGBImage PUBLIC ${ITK_LIBRARIES})