module.exports = function cmOpenid (context) {
  context = context || {};
  var redirect_uri = context.redirect_uri;
  return (
    ["div",
      {class:"cm cm-openid"},
      context.openIDProviders.map(function(p) {
        return (["a", {"href": p.authURI + (context.query || '')}, p.name]);
      })]
  );
};
