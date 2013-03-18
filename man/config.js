seajs.config({
  // Enable plugins
  //使用seajs为我们提供的shim插件，这样我们可以直接使用现有的jquery类库和插件，不需要依据CommonJS规范做代码改动
  plugins: ['shim'],

  // Configure alias
  alias: {
    'jquery': {
      src: 'lib/jquery-1.9.1.min.js',
      exports: 'jQuery'
    }
  }
});