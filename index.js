module.exports = function(providers) {
  return (
    ["div",
      {class:"openid-providers"},
      providers.map(function(p) {
        return (["a", {"href": "/auth/openid/" + p.name}, p.name]);
      })]
  );
};
