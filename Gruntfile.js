module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			compass: {
				files: ['src/css/*.{scss,sass}'],
				tasks: ['compass']
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify']
			}
		},
		uglify: {
			all: {
				files: {
					'dist/js/trunca.min.js': [ 'src/js/trunca.js', 'src/js/trunca-init.js' ]
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'src/css',
					cssDir: 'dist/css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['compass:dev', 'uglify']);
	grunt.registerTask('watch', ['compass:dev', 'uglify']);
	grunt.registerTask('watch:css', ['compass']);
	grunt.registerTask('watch:js', ['uglify']);
};