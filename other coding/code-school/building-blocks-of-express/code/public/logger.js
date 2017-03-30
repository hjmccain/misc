module.exports = (function(req, res, next) {
  var startTime = +new Date();
  var stream = process.stdout;

  request.on('finish', function() {
    var finishTime = +new Date();
    var duration = startTime - finishTime;
    var msg = `This request took ${duration} ms.`
    stream.write(msg);
  });
});
