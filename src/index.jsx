import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.querySelector('#root') // 담은 변수
const root = ReactDOM.createRoot(container) // DOM => React 내용으로 바꿔줌
root.render(<App />) // root.render()

// ReactDOM.render(<App />, document.querySelector('#root'))


// import
// require

