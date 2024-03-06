import React from 'react';
import './index.scss';

function StartWindow({ onStartClick }) {
  return (
    <div className="start-window">
      <h1>Перед вами викторина по JS и React. <p>Начать игру?</p></h1>
      <button onClick={onStartClick}>Да</button>
    </div>
  );
}

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое виртуальный DOM?',
    variants: ['Это концепция, предполагающая создание в памяти браузера "виртуальной" копии реального DOM (Document Object Model). ',
     'Хук, принимающий функцию, которая будет выполнена после каждой перерисовки компонента. ',
      'Дом?'],
    correct: 0,
  },
  {
    title: 'useState- это ... ',
    variants: ['Хук, который используется для выполнения побочных эффектов в функциональных компонентах. ',
     'функция, предоставляемая React, которая позволяет функциональным компонентам хранить состояние. Она возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления. ',
      'это аналог useEffect, отличающийся тем, что выполняется синхронно до перерисовки компонента, что бывает крайне полезным при взаимодействии в функции-коллбеке с DOM.'],
    correct: 1,
  },
  {
    title: 'Зачем нужен атрибут key?',
    variants: [
      'это передача свойств напрямую от родителя к ребенку через длинную иерархию компонентов. ',
      'Это переменная',
      'Этот атрибут позволяет React понимать, какие именно элементы в списке были модифицированы или удалены, что увеличивает производительность рендеринга.',
    ],
    correct: 2,
  },
  {
    title: 'Что такое ECMAScript?',
    variants: [
      'это спецификация, стандарт скриптовых языков программирования, он является основой JS.',
      'Это библиотека JS',
      'это способность функции во время создания запоминать ссылки на переменные и параметры, находящиеся в текущей области видимости. ',
    ],
    correct: 0,
  },
  {
    title: 'Что делает оператор "===" в JavaScript?',
    variants: [
      'Строгое равенство, сравнивает значения переменных с учетом типов',
      'Операция присваивания',
      'Проверка условия в цикле',
    ],
    correct: 0,
  },
  {
    title: 'Что такое props в React?',
    variants: [
      'Специальные методы для управления состоянием компонентов',
      'Встроенные свойства объекта React',
      'Параметры, передаваемые компоненту при его использовании',
    ],
    correct: 2,
  },
  {
    title: 'Как можно изменить состояние компонента в React?',
    variants: [
      'Изменением свойств объекта state напрямую',
      'С помощью функции this.setState()',
      'НЕЛЬЗЯ ИЗМЕНИТЬ СОСТОЯНИЕ КОМПОНЕНТА',
    ],
    correct: 1,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://media.giphy.com/media/jmn71s8t0WQViq7Kw6/giphy.gif" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100)

 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        
      {question.variants.map((text, index) => (
        <li onClick={() => onClickVariant(index)} key= {text}>
          {text}
          </li> 
        ))}
        
      </ul>
    </>
  );
}

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);
const [step, setStep] = React.useState(0);
const [correct, setCorrect] = React.useState(0);
const question = questions[step];


const onClickVariant = (index) => {
console.log(step, index)
setStep(step+1)

if (index === question.correct) {
  setCorrect(correct +1)
}
}

console.log(question);

const handleStartClick = () => {
  setGameStarted(true);
};
  return (
    <div className="App">
    {!gameStarted && <StartWindow onStartClick={handleStartClick} />}
    {gameStarted && (step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />)}
  </div>
  );
  
}

export default App;
