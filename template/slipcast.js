module.exports = {
  files: ['app.css', 'app.js', 'styles.scss'],
  handlebars: function(handlebars) {
    handlebars.registerHelper('nestedUrl', function(url, options) {
      var path = options.data.root.path.dir,
          prepend = '';

      if (path) {
        prepend = path.split('/').map(() => '../').join('');
      }

      return new handlebars.SafeString(prepend + url);
    })
  }
};
