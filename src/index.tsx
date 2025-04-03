import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/**
 * TypeScript는 JavaScript의 강력한 대체제로, 규모가 큰 프로젝트에서 특히 유용하다.
✅ 정적 타입 시스템 덕분에 코드 안정성과 가독성이 높아지고, 디버깅이 쉬워진다.
✅ React, Node.js 등과 잘 통합되며, 프론트엔드 & 백엔드 개발에 모두 적합하다.
❌ 하지만 작은 프로젝트나 단순한 스크립트 작성에는 설정 과정이 부담될 수도 있다.

결론적으로, 규모가 크거나 유지보수가 중요한 프로젝트라면 TypeScript를 적극 활용하는 것이 좋다.

-------
📌 TypeScript를 사용하지 않았을 때의 문제점
JavaScript는 그 유연성으로 인해 다양한 상황에서 빠르게 적용할 수 있는 장점을 지니고 있지만, 타입 시스템이 부재한 동적 언어이기 때문에 여러 문제점이 발생할 수 있다. 특히, 협업 시에 이러한 문제점은 더 심각하게 나타난다.

💡 타입 에러로 인한 문제
JavaScript는 변수에 할당된 값의 타입을 컴파일 타임에 검사하지 않기 때문에, 런타임에서 예기치 않은 타입 관련 오류가 발생할 가능성이 크다. 예를 들어, 함수가 문자열을 인자로 받을 것으로 예상했지만, 숫자가 전달되면 런타임에서 오류가 발생할 수 있다. 이는 특히 규모가 큰 프로젝트에서 치명적인 버그를 초래할 수 있다.

💡 협업 시 일관성 부족
여러 개발자가 협업하는 환경에서는 각자 코딩 스타일이 다를 수 있고, 동일한 변수에 대해 서로 다른 타입을 사용하려는 시도가 있을 수 있다. TypeScript가 없는 JavaScript 환경에서는 이러한 일관성 문제를 해결하기 어렵다. 이는 코드 리뷰 과정에서 혼란을 초래하고, 코드베이스의 유지보수를 복잡하게 만든다.

💡 코드 이해와 유지보수의 어려움
타입이 명시되지 않은 JavaScript 코드는 그 의도를 파악하기 어려울 수 있다. 변수나 함수의 반환값이 어떤 타입을 가지는지 명확하지 않기 때문에, 다른 개발자가 코드를 이해하고 수정하는 데에 많은 시간이 소요될 수 있다. 이는 특히 새로운 팀원이 합류하거나 코드 리팩토링이 필요할 때 문제가 된다.
 */
