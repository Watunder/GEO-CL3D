import url from 'url';
import path from 'path';
import { globSync } from 'glob';
import html from '@rollup/plugin-html';
import inline from 'rollup-plugin-inline-string';
import resolve from '@rollup/plugin-node-resolve';

// rollup plugin
function module2Path(option) {
    const { includes } = option;
    Object.keys(includes).forEach((targetName) => {
        includes[targetName] = includes[targetName]
            .split(path.sep)
            .join(path.posix.sep);
    });
    return {
        name: "module2Path",
        resolveId: {
            order: "pre",
            async handler(source, importer, options) {
                if (source && Object.keys(includes).includes(source)) {
                    const t = includes[source];
                    if (t) {
                        let resolution = await this.resolve(t, undefined, {
                            skipSelf: true,
                            ...options,
                        });
                        if (!resolution) {
                            resolution = {
                                id: t,
                                moduleSideEffects: true,
                                external: true,
                            };
                        }
                        return resolution;
                    }
                }
                return null;
            },
        },
    };
}

export default [
    {
        input: './_lib/index.js',
        output: {
            format: 'esm',
            file: './_out/gameface.js',
        }
    },
    {
        input: Object.fromEntries(
            globSync('./*/script.js').map((file) => [
                path.dirname(file),
                file
            ])
        ),
        plugins: [
            module2Path({
                includes: {
                    'coherent-gameface-components': '../gameface.js'
                }
            }),
            resolve({
                
            }),
            inline({
                extensions: ['.html'],
                minify: true
            })
        ],
        output: {
            format: 'esm',
            dir: './_out/gameface/',
            chunkFileNames: '[name].js'
        },
        context: "globalThis"
    }
];
