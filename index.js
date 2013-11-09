module.exports = function cmOpenid (providers) {
  return (
    ["div",
      {class:"cm cm-openid"},
      providers.map(function(p) {
        return (["a", {"href": p.authURI }, p.name]);
      })]
  );
};
