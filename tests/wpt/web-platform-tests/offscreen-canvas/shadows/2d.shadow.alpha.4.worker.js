// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.alpha.4
// Description:Shadows with alpha components are correctly affected by globalAlpha
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Shadows with alpha components are correctly affected by globalAlpha");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00'; // (work around broken Firefox globalAlpha caching)
ctx.shadowColor = 'rgba(0, 0, 255, 0.707)';
ctx.shadowOffsetY = 50;
ctx.globalAlpha = 0.707;
ctx.fillRect(0, -50, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255", 2);

t.done();

});
done();