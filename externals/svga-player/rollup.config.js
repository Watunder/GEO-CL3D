import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: './dist/lib/index.js',
		plugins: [
			resolve()
		],
		output: {
			format: 'esm',
			file: './dist/svga-player.js'
		}
	}
]