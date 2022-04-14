import React from 'react';
import './style.css';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <div>
        <Image></Image>
        선수 정보
      </div>
    </header>
  );
}
function Image(props) {
  return <img src={props.adr} alt="프사 적용 " width="100" height="100"></img>;
}
function Article(props) {
  return <article>선수 기록</article>;
}
function SidePanel(props) {
  const button = ['검색', '수정', 'EXPORT'];
  return (
    <article>
      <div>
        <input></input>
      </div>
      <div>
        <button
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {button[0]}
        </button>
      </div>
      <div>
        <button
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {button[1]}
        </button>
      </div>
      <div>
        <button
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {button[2]}
        </button>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <Header title="세이버 매트릭스"></Header>
      <Article></Article>
      <SidePanel  onChangeMode={function () {
          alert('loding');
        }}></SidePanel>
    </div>
  );
}
