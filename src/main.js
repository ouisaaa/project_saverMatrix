import React from 'react';
import './style.css';

function Header(props){
  return (<header>
    <h1>{props.title}</h1>
    선수 이름을 입력후 검색 해주세요
    </header>
  );
}
function Article(props){
  return <article>
    <input></input>
    <button onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.but}</button>
  </article>
}
export default function App() {
  return (
    <div>
      <Header title="세이버 매트릭스"></Header>
      <Article but="검색" onChangeMode ={function(){
        alert("loding");
      }}></Article>
    </div>
  );
}
