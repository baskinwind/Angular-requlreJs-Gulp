# gulp-requireJs-AngularJs-demo

> AngularJS webapp using requirejs gulp
---

> 安装插件 / install plugins

1. 加载所需的node模块 / load node modules

    `npm install`

2. 加载页面使用的js插件 / load javascript plugins which use in page

    `bower install`
    
---

> 主要解决问题

使用requireJs来开发项目，对程序员来说是极其友好的，但是对于浏览器来所不得不说是个灾难，请求过多会带来的性能问题，因此写了一套gulp任务，在保持原有代码不变的情况下，压缩整合代码。

---

> gulp任务列表 / gulp tasks list

1. `clean` : 清除临时目录
2. `styles` : 打包压缩`css/scss`文件
3. `fonts` : 拷贝`font`目录
4. `html` : 利用`useref`插件将所需要的`js`代码进行合并、`requireJs`替换最终合并成一个`js`文件
5. `markVersion` : 防止浏览器缓存，加上版本号（可指定文件）
6. `addVersion` : 在适当位置（比如`html`、`css`引用中），将文件名替换为加了版本号的文件名
7. `browserSync` : 开启一个`web`服务器，解决`Angular`的`XHR`问题（使用`webstorm`可以不使用）
8. `watch` : 监视文件改变，浏览器实时更新
9. `run` : `browserSync`和`watch`任务的集合
10. `package` : 打包压缩整个`AngularJs+requireJs`项目，生成`dist`目录
11. `version` : 将打包好的项目加版本号，生成`rev`目录
12. `default` : 将整个项目压缩打包并加上版本号，生成`rev`目录

---

> 注

1. 使用的`gulp4.0`版本，与之前的版本会用冲突，使用前请先保证本地的`gulp`已清除，以免不必要的`bug`。
2. 使用的`gulp-useref`和`gulp-rev`为最新版本，比较之前的插件`API`有较大的改动。如若需要更改`gulp`的代码，先去[npm-gulp-useref](https://www.npmjs.com/package/gulp-useref)[npm-gulp-rev](https://www.npmjs.com/package/gulp-rev)上查阅后更改。
3. 该项目的目录结构可以更改，如若更改，需要到`gulpfile.js`文件中修改配置信息，配置对象为:`appInfo`。
4. 该项目不仅仅适用于`AngularJs`,任何使用`RequireJs`搭建项目的都可以使用，只需将所有的符合`RequireJs`模块的代码放入到`script`目录即可。
5. 有任何问题，可以联系我。[wwsxuan@163.com](mailto:wwsxuan@163.com)