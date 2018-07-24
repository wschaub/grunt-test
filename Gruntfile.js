module.exports = function( grunt ) {
    grunt.initConfig( {
        qunit: {
            all: [
                    'test/fixtures/many_html/**/*.html',
                    'test/fixtures/single_html/testrunner.html'
                 ]
        }
    } );
    grunt.loadNpmTasks( "grunt-contrib-qunit" );
    grunt.loadNpmTasks('grunt-qunit-junit');
    grunt.registerTask('test', [ 'qunit_junit', 'qunit']);
};

