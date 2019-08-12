module.exports = function(grunt) {
    //配置参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "newGuo/global/scripts/lib/jquery.mnmenu.min.js",
                    "newGuo/global/scripts/lib/touchslider.min.js",
                    "newGuo/global/scripts/lib/fancybox/jquery.fancybox-1.3.4.pack.min.js",
                    "newGuo/global/scripts/lib/fancybox/jquery.easing-1.3.pack.min.js",
                    "newGuo/global/scripts/lib/jquery.hashchange.min.js",
                    "newGuo/global/scripts/lib/jquery.easytabs.min.js"
                ],
                dest: "newGuo/global/scripts/default.js"
            }
        },*/
/*        uglify: {
            options: {
            },
            dist: {
                files: {
                    'newGuo/global/scripts/lib/jquery.mnmenu.min.js': 'newGuo/global/scripts/lib/jquery.mnmenu.js',
                    'newGuo/global/scripts/lib/touchslider.min.js': 'newGuo/global/scripts/lib/touchslider.js',
                    'newGuo/global/scripts/lib/fancybox/jquery.fancybox-1.3.4.pack.min.js': 'newGuo/global/scripts/lib/fancybox/jquery.fancybox-1.3.4.pack.js',
                    'newGuo/global/scripts/lib/fancybox/jquery.easing-1.3.pack.min.js': 'newGuo/global/scripts/lib/fancybox/jquery.easing-1.3.pack.js',
                }
            }
        },*/
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'res/css/base.min.css': [
                        "res/css/base.css",
                    ]
                }
            }
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
  /*  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');*/

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //注册任务
    //grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('default', [ 'cssmin']);
}