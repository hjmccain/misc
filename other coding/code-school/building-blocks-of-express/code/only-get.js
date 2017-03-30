module.export = (function(req, res, next) {
  if (req.method === 'GET') {
    next();
  } else {
    response.write('That method is not allowed');
    response.end;
  }
});
