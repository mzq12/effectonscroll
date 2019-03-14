import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
const input = './src/effect.js'
const prefixStyle = postcss({
    extract: 'dist/effect.css',
    plugins: [autoprefixer, cssnano]
})
export default [{
    input,
    output: {
        file: 'dist/effect.js',
        name: 'EFFECT',
        format: 'umd',
        sourcemap: process.env.NODE_ENV === 'dev'
    },
    plugins: [
        prefixStyle,
        babel({
            exclude: ['node_modules/**']
        }),
        uglify,
        commonjs(),
        resolve()
    ]
}]