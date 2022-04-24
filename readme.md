# Webpack 

nodejs로 이루어지는 친구
npm 패키지를 쉽게 설치가 가능하다

```
npm init -y
npm install react react-dom
npm install -D webpack webpack-cli

```

실행방법

1. npx webpack
2. package.json에서 "script"쪽으로 간다음 "webpack" : "webpack" 를 추가해준다   그리고 npm run webpack  ㄱㄱ


1. webpack.config.js 파일을 만들어줘야한다
2. 디렉토리 생성 (src, dist)
3. index.html을 생성해준다.
4. 기본적인 html 내용과 div, script 내용 입력
5. src 디렉토리에서 index.jsx


Webpack Babel을 연결해주는 라이브러리
옛날 브라우저에서도 구동할수 있게 코드를 바꿔주는 바벨이 필요
JSX를 사용할 수 있는 바벨이 필요


**Webpack Babel 연결해주는 라이브버리**
```
    npm install -D babel-loader
```

**옛날 브라우저에서도 구동할수 있게 코드를 바꿔주는 바벨**
```
    npm install -D @babel/preset-env
```

**JSX를 사용할 수 있는 바벨**
```
    npm install -D @babel/preset-react
```

npm install
```
    npm install -D babel-loader @babel/preset-env @babel/preset-react
```



# devServer

1개의 html, 1개의 javascript

1. 웹서버를 구축해준다. = > index.html 이 파일을 돌려줄 수 있게 하는 기능이라 생각하면 된다.
2. src 폴더안에서 코드가 수정됨을 감지하면 서버를 재시작해준다. bundle을 다시 만들어준다.
3. devServer는 개발할때만 사용하는 것!


```
    npm install -D webpack-dev-server
```

devServer을 실행하고자 package.json script로 가서 "dev":"webpack server --env development" 추가


```
    npm install -D @pmmmwh/react-refresh-webpack-plugin
    npm install -D react-refresh
```


# CSS 처리
```
    npm install -D mini-css-extract-plugin css-loader
```

css-loader
<div className="app">
</div>


mini-css-extract-plugin
html link


# CSS 사용방법

css 파일을 import 하는 방법

css.module 만드는 방법



styled-component 만드는 방법

```
    npm i styled-components

```

스토리북

<style>
</style>

