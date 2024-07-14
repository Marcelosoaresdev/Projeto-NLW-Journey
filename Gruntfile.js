module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },
        less: {
            development:{
                options: {
                    compress: true
                },
                files: {
                    "dist/styles/main.css" : "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:development"]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    

    grunt.registerTask('default', ["watch"]);
    grunt.registerTask('build', ["uglify"]);
}