module.exports = function( grunt ) {
    grunt.initConfig( {
        qunit: {
            all: ["test.html","foo.html","bar.html"]
        }
    } );
    grunt.loadNpmTasks( "grunt-contrib-qunit" );
    grunt.loadNpmTasks('grunt-qunit-junit');
    grunt.registerTask('test', [ 'qunit_junit', 'qunit']);
};

