const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    name:'react-project',  // webpack 이름 설정
    mode:'development',    // 모드 설정

    resolve:{
        extensions:['.js','.jsx'] // 이렇게 하면 뒤에 확장자명과 파일을 제거가능(줄일 수 있음)
    },

    // entry : 내가 앞으로 번들할 파일들
    entry:{
        app:['./src/index']
    },

    module:{
        rules:[{
            test:/\.jsx?/, // 확장자가 .js or .jsx
            loader: 'babel-loader', // webpack과 babel을 연결해주는 라이브러리
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['last 2 chrome versions','> 5% in KR'] // browserslist
                        },
                        debug:true,
                    }], // 옛날 브라우저에서도 환경에 맞게 실행해줌
                    '@babel/preset-react' // JSX를 사용하기 위해
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }]
    },

    plugins:[
        new webpackPlugin(),
        new MiniCssExtractPlugin({ filename:'style.css'}) // 파일을 생성해줌
    ],

    // output : 내가 내보낼 위치와 파일명
    output:{
        path: path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/dist',
    },

    devServer:{
        static: {
            directory:path.join(__dirname,'public'),
        },
        compress:true,
        port:3000,
        hot:true,
        historyApiFallback:true, // 새로고침
    }
}
