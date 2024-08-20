import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";

const packageJson = require('./package.json');

export default [
    {
        input: "src/VideoPlayer.tsx",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ],
                plugins: [
                    "@babel/plugin-transform-runtime"
                ]
            }),
            postcss(),
            terser.default(),
        ],
        external: ["react"]
    },
    {
        input: "src/VideoPlayerProps.d.ts",
        output: [{file: "dist/types.d.ts", format: "es"}],
        plugins: [dts.default()],
    }
]