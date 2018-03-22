import { create as browserSync } from 'browser-sync';
import gulp from 'gulp';
import debuga from 'debuga';

const bs = browserSync('server');
const { PORT, OPEN, NODE_ENV, TUNNEL } = process.env;

gulp.task('server', () => (
	bs.init({
		files: ['dist/**/*', '../**/*.php'],
		open: !!OPEN,
		reloadOnRestart: true,
		port: PORT || 3000,
		snippetOptions: {
			rule: {
				match: /<\/body>/i
			}
		},
		proxy: 'http://hurmainsider.lo/',
		injectChanges: true,

		tunnel: !!TUNNEL
	})
));
