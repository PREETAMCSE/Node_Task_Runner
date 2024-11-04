module.exports = function(grunt){

    // configure the task
    grunt.initConfig({
        // Specify task
        uglify:{
            target: {
                files:{
                    //"dest/js/main.min.js": ["src/js/input1.js", "src/js/input2.js"] // In this way we can mention js file we want to include
                    "dest/js/main.min.js": ["src/js/*.js"] // this will include all js file in specified directory
                }
            }
        },
        // Configure minify css task
        cssmin:{
            target:{
                files:[
                    {
                        expand : true, // It means paths are separetly mentioned and has to be used together
                        cwd: "src/css" , // current working directory
                        src:["*.css", "!*.min.css"], // All css fine will be included and .min.css will be excluded
                        dest : "dest/css",
                        ext:".min.css"

                    }
                ]
            }
        }
    })

    // Load the libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Setting up the task
    grunt.registerTask('default', ['uglify', 'cssmin']);

}