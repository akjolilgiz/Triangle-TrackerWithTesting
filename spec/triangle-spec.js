import { Triangle } from './../src/triangleTracker.js';


describe('Triangle', function() {

  it('should test whether a triangle is a triangle', function() {
    var triangle = new Triangle(3,3,43);
    expect(triangle.checkType()).toEqual("not a triangle");
  });

  it('should test whether a triangle is a equilateral', function() {
    var triangle = new Triangle(3,3,3);
    expect(triangle.checkType()).toEqual("equilateral");
  });

  it('should test whether a triangle is a isosceles', function() {
    var triangle = new Triangle(3,3,4);
    expect(triangle.checkType()).toEqual("isosceles");
  });

  it('should test whether a triangle is a scalene', function() {
    var triangle = new Triangle(3,5,4);
    expect(triangle.checkType()).toEqual("scalene");
  });



});
