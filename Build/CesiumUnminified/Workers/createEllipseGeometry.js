define(['./Matrix3-41c58dde', './defaultValue-fe22d8c0', './EllipseGeometry-37014da4', './Check-6ede7e26', './Math-0a2ac845', './Transforms-bc45e707', './Matrix2-e1298525', './RuntimeError-ef395448', './combine-d9581036', './ComponentDatatype-cf1fa08e', './WebGLConstants-0b1ce7ba', './EllipseGeometryLibrary-92ab6b1e', './GeometryAttribute-a466e9c7', './GeometryAttributes-ad136444', './GeometryInstance-34d9e21e', './GeometryOffsetAttribute-9ad0019c', './GeometryPipeline-dcf79306', './AttributeCompression-f9f6c717', './EncodedCartesian3-57415c8a', './IndexDatatype-2643aa47', './IntersectionTests-88c49b2e', './Plane-4c3d403b', './VertexFormat-030f11ff'], (function (Matrix3, defaultValue, EllipseGeometry, Check, Math, Transforms, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryOffsetAttribute, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
