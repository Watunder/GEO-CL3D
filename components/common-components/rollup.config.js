import path from 'path';
import { globSync } from 'glob';
import inline from 'rollup-plugin-inline-string';

export default [
    {
        input: Object.fromEntries(
            globSync('./*/script.js').map((file) => [
                path.dirname(file),
                file
            ])
        ),
        plugins: [
            inline({
                extensions: ['.css'],
                minify: true
            })
        ],
        output: {
            format: 'esm',
            dir: './_out/common/',
            chunkFileNames: '[name].js'
        },
        context: "globalThis"
    }
];
