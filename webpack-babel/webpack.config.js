const path = require('path')
const webpack = require('webpack')
// 导入HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


//配置文件遵循node语法，这个配置文件，通过Node中的模块操作，向外暴露一个配置对象

module.exports = {
  entry: path.join(__dirname, './main.js'),//入口，表示要用webpack打包的那个文件

  output: {//输出文件的相关配置
    path: path.join(__dirname, './dist'),//指定打包好的文件，输出到哪个目录中去
    filename: 'main.js'//指定输出的文件的名称
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'), // 托管根路径
    compress: true, // 启用压缩
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
    hot: true // 2. 开启热更新  如果设置hot为true 需要手动添加HMR插件, 详见第三步
  },
  plugins: [ // 插件配置项
    new webpack.HotModuleReplacementPlugin(), // 3. 添加热更新插件
    new HtmlWebpackPlugin({ // 用于帮助我们自动生成HTML文件的
      template: './src/index.html', // 如果不指定template, 默认生成一个空的HTML5页面, 指定template表示从哪个HTML文件编译一个新的HTML出来
      filename: 'index.html' // 默认值就是index.html, 便于开发人员自己查看
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|jpg|gif|jpeg|bmp|webp)$/,
        // use: ['url-loader?limit=8192&name=[hash:8]-[name].[ext]']
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 限制 单位为byte  8192字节是8KB
            }
          }
        ]
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ['url-loader'] },//字体图标loader
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader'}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  mode: 'development' // 开发  developer 开发者  Programmer 程序员
}

//结合webpack-dev-server工具, 完成自动化编译打包
//必须先安装webpack和webpack-cli在项目开发依赖!
//再安装webpack-dev-server到项目开发依赖
//npm i webpack webpack-cli -D
//npm i webpack-dev-server -D
