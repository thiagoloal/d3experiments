import { resolve, join } from 'path';
import { format } from 'util';
import pkg from './package.json';
import gulp from 'gulp';
import hub from 'gulp-hub';
import process from 'process';
import environments from 'gulp-environments';
// import requireDir from 'require-dir';

// Loading gulp tasks in to the registry
// requireDir('./gulp/', { recurse: true });

// Load some files into the registry
//const hub = new HubRegistry(['gulp/*.js']);

hub(['gulp/*.js']);

// Tell gulp to use the tasks just loaded
//gulp.registry(hub);

// require('gulp-require-tasks')()

// Basic task and alias
// gulp.task('default', gulp.parallel('scripts', 'styles', 'fonts', 'images', 'templates'));
gulp.task('default', gulp.parallel('scripts', 'styles', 'jsons', 'fonts', 'images', 'templates'));

gulp.task('set-prod-node-env', function() {
	return process.env.NODE_ENV = 'production';
});
