import chai = require('chai');

// set env variable prior to importing generateffi
// process.env.DYLD_LIBRARY_PATH = '/usr/local/opt/llvm/lib:'
const generate = require('../lib/generateffi').generate;

const assert = chai.assert;

describe('Header Parsing Test', () => {

	it('should work', () => {
		assert.equal(2+3, 5);
	})

	it('should generate a header file', () => {

		// assumed path:
		// /Users/arik/Developer/rust-swift-ffi/node/src/ldk

		// command:
		// ../../node_modules/ffi-generate/bin/ffi-generate.js -L /usr/local/opt/llvm/lib -f ../include/joint_headers.h -l ../../../../rust-lightning/target/release/liblightning > ./ffi.js

		// const llvmLibrary = '/usr/local/opt/llvm/lib';
		//
		// const env = process.env;
		// switch (process.platform) {
		// 	case 'darwin':
		// 		process.env.DYLD_LIBRARY_PATH = llvmLibrary + ':' + (env.DYLD_LIBRARY_PATH || '');
		// 		break;
		// 	default:
		// 		process.env.LD_LIBRARY_PATH = llvmLibrary + ':' + (env.LD_LIBRARY_PATH || '');
		// 		break;
		// }
		//
		// console.log('DYLD_LIBRARY_PATH', process.env.DYLD_LIBRARY_PATH);

		const filename = `${__dirname}/resources/joint_headers.h`;
		const library = `/Users/arik/Developer/rust-swift-ffi/rust-lightning/target/release/liblightning`;

		const ret = generate({
			filename,
			library,
			// module: argv.m,
			// prefix: argv.p,
			// compiler_args: argv._,
			// strict_type: argv.s,
			// single_file: argv.x,
		});
		console.log('here');

	})

})
