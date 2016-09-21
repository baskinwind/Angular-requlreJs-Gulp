# AngularJs && requireJs with Gulp


### 安装插件 / install plugins

1. 加载所需的node模块 / load node modules

    `npm install`

2. 加载页面使用的js插件 / load javascript plugins which use in page

    `bower install`

---

### 主要解决问题

每次使用Angular来开发，总想着有一天要整出一套随拿随用的项目框架来。该项目的目的便在于此。

其次，使用requireJs来开发项目，对程序员来说是极其友好的，但是对于浏览器来所不得不说是个灾难，请求过多会带来的性能问题，因此整合一套gulp任务，在保持原有代码不变的情况下，压缩整合代码。

---

### 目录结构及文件分析

> app/script

js文件（这是废话），使用requireJs来开发。

> app/script/controllers

所有的 `controller` 都放在这。不使用 `angular` 的模块，只写一个含有注入的 `function` ，使用文件名来区分不同的 `controller` 。所有的 `controller` 都需要在 `app/script/route.js` 中注册、匹配路由和模板。

> app/script/directives

所有的 `directives` 都放在这。同样不使用 `angular` 的模块，只返回一个函数，使用文件名来区分不同的 `directives` 。所有的 `directives` 都需要在 `app/script/appDirective.js` 中注册并命名，才可以在模板文件中使用。

> app/script/service

所有的 `service` 都放在这。同样不使用 `angular` 的模块，只写一个含有注入的 `function` ，使用文件名来区分不同的 `directives` 。所有的 `service` 都需要在  `app/script/appService.js` 中注册并命名，若需要该 `service` 直接在 `controller` 中注入即可。

> app/script/app.js

将项目所有的 `angular` 注册到一个 `angular` 上，该模块为该项目的入口模块。

> app/script/main.js

将入口模块注册到 `index.html` 上。

> app/script/appDirective.js

`angular` 模块，用于注册 `app/script/directives` 目录下的 `directive` 。

> app/script/appService.js

`angular` 模块，用于注册 `app/script/service` 目录下的 `service`。

> app/script/route.js

`angular` 模块，用于注册 `app/script/controllers` 目录下的 `controller` ，并匹配路由地址和模板文件。

> app/script/require-config.js

`requireJs` 的配置文件，用于加载 `requireJs` 模块



### gulp任务列表 / gulp tasks list

1. `clean` : 清除临时目录
2. `styles` : 打包压缩 `css/scss` 文件
3. `fonts` : 拷贝 `font` 目录
4. `html` : 利用 `useref` 插件将所需要的 `js` 代码进行合并、 `requireJs` 替换最终合并成一个 `js` 文件
5. `markVersion` : 防止浏览器缓存，加上版本号（可指定文件）
6. `addVersion` : 在适当位置（比如 `html` 、 `css` 引用中），将文件名替换为加了版本号的文件名
7. `browserSync` : 开启一个 `web` 服务器，解决 `Angular` 的 `XHR` 问题（使用 `webstorm` 可以不使用）
8. `watch` : 监视文件改变，浏览器实时更新
9. `run` :  `browserSync` 和 `watch` 任务的集合
10. `package` : 打包压缩整个 `AngularJs+requireJs` 项目，生成 `dist` 目录
11. `version` : 将打包好的项目加版本号，生成 `rev` 目录
12. `default` : 将整个项目压缩打包并加上版本号，生成 `rev` 目录

---

### 注

1. 使用的 `gulp4.0` 版本，与之前的版本会用冲突，使用前请先保证本地的 `gulp` 已清除，以免不必要的 `bug` 。
2. 使用的 `gulp-useref` ( `3.1.0` ) 和 `gulp-rev` ( `7.1.2` ) 为最新版本，比较之前的插件 `API` 有较大的改动。如若需要更改 `gulp` 的代码，先去 [npm-gulp-useref](https://www.npmjs.com/package/gulp-useref) 和 [npm-gulp-rev](https://www.npmjs.com/package/gulp-rev) 上查阅后更改。
3. 该项目的目录结构可以更改，如若更改，需要到 `gulpfile.js` 文件中修改配置信息，配置对象为: `appInfo` 。
4. 该项目不仅仅适用于 `AngularJs` ,任何使用 `RequireJs` 搭建项目的都可以使用 `gulp` 的任务，只需将所有的符合 `RequireJs` 模块的代码放入到 `script` 目录即可。
5. 有任何问题，可以联系我。[wwsxuan@163.com](mailto:wwsxuan@163.com)

### TODO
- ADD component angular 1.5