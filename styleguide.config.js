const path = require('path');

const baseComponentDir = path.join(__dirname, './components');
const cssDir = path.join(__dirname, './css');

module.exports = {
  title: 'OneExchange React Bootstrap',
  sections: [
    {
      name: 'Base',
      components: './components/base/*.js'
    }
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md');
  },
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js');
    const importPath = path.relative(baseComponentDir, componentPath).replace(/\.js$/, '');
    return `import ${componentName} from 'oe-react-bootstrap/${importPath}'`;
  },
  updateWebpackConfig(config) {
    config.entry.push(path.join(__dirname, 'css/bootstrap.css'));

    config.module.loaders.push({
      test: /\.js$/,
      include: baseComponentDir,
      loader: 'babel'
    }, {
      test: /\.css$/,
      include: path.join(__dirname, './css'),
      loader: 'style!css'
    }, {
      test: /\.eot$|\.ttf$|\.svg$|\.woff$/,
      include: path.join(__dirname, './webfonts'),
      loader: 'file'
    });

    return config;
  }
};