import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import svg from 'rollup-plugin-svg'
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      image(),
      svg(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: false,
        inject: {
          insertAt: "top",
        },
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        exclude: "node_modules/**",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts()],
    external: [/\.css$/],
  },
];