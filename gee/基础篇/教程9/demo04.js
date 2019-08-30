//代码链接：https://code.earthengine.google.com/be167f7b0c532d2256f6f6fcec12b63d


Map.setOptions("SATELLITE");
var image = ee.Image("LANDSAT/LC08/C01/T1_TOA/LC08_123037_20180611");
Map.centerObject(image, 7);

var ndvi = image.normalizedDifference(["B5", "B4"]);
var visParam = {
  min: -0.2, 
  max: 0.8,
  palette: 'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
    '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301'
};
Map.addLayer(ndvi, visParam, "ndvi");