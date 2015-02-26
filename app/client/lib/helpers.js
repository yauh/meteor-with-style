ensureHttpPrefix = function (url) {
  // Use http:// as the default URL prefix
  var prefix = 'http://';
  // check if http(s) is already present
  if (!/^https?:\/\//i.test(url)) {
    url = prefix + url;
  }
  return url;
};