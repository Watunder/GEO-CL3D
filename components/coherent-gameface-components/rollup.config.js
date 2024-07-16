import url from 'url';
import path from 'path';
import { globSync } from 'glob';
import html from '@rollup/plugin-html';
import inline from 'rollup-plugin-inline-string';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: Object.fromEntries(
            globSync('./*/script.js').map((file) => [
                path.dirname(file),
                file
            ])
        ),
        plugins: [
            resolve(),
            inline({
                extensions: ['.html'],
                minify: true
            })
        ],
        output: {
            format: 'esm',
            dir: './_out',
            chunkFileNames: '[name].js'
        },
        context: "globalThis"
    }
];
