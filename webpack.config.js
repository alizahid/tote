const { resolve } = require('path')

const set = require('lodash.set')

const Copy = require('copy-webpack-plugin')

module.exports = env => {
  return {
    entry: './src/index.ts',
    mode: env.production ? 'production' : 'development',
    module: {
      rules: [
        {
          include: /src/,
          loader: 'ts-loader',
          test: /\.ts$/
        }
      ]
    },
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      filename: 'index.js',
      library: 'index',
      libraryTarget: 'commonjs2',
      path: resolve(__dirname, 'dist')
    },
    plugins: [
      new Copy([
        {
          from: './src/**/function.json',
          transform: content => {
            const json = JSON.parse(content.toString())

            if (env.production) {
              set(json, 'bindings.0.authLevel', 'function')
            }

            return JSON.stringify(json)
          },
          transformPath: path => path.substr(4)
        },
        {
          from: './src/host.json'
        },
        {
          from: './src/extensions.csproj'
        }
      ])
    ],
    resolve: {
      extensions: ['.ts', '.js']
    },
    target: 'node'
  }
}
