Package.describe({
    name: 'dasdeck:jquery-query-builder',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'add query builder for meteor',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.addFiles('QueryBuilder/code.js', 'client');
    api.addFiles('QueryBuilder/css/query-builder.default.min.css', 'client');
    
});

Package.onTest(function (api) {
    //api.use('ecmascript');
    //api.use('tinytest');
    //api.use('mongo-object');
    //api.addFiles('mongo-object-tests.js');
});
