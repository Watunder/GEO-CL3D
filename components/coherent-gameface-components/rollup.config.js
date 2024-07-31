import url from 'url';
import path from 'path';
import { globSync } from 'glob';
import multi from '@rollup/plugin-multi-entry';
import inline from 'rollup-plugin-inline-string';
import resolve from '@rollup/plugin-node-resolve';
import inputCSS from 'rollup-plugin-input-with-css';

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
    },
    {
        input: Object.fromEntries(
            globSync('./**/*.css', { ignore: './**/node_modules/**' }).map((file, index) => {
                let name = `css-${file.slice(0, file.indexOf('\\'))}-${path.basename(file, '.css')}`
                if (path.basename(file) == 'coherent-gameface-components-theme.css')
                    name = 'css-coherent-gameface-components-theme';
                return [
                    name,
                    file
                ]
            })
        ),
        plugins: [
            inputCSS(),
            inline({
                extensions: ['.css'],
                minify: true
            })
        ],
        output: {
            dir: './_out/gameface-style/'
        }
    },
    {
        input: [
			...globSync('./_out/*/*.js', { ignore: './_out/gameface-demo/**' }).map((file) => {
				return file;
			})
		],
        plugins: [
            multi({
                entryFileName: 'gameface-bundle.js'
            })
        ],
		output: {
			format: 'esm',
			dir: './_out/'
		}
    }
];
