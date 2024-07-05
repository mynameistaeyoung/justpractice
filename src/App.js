import React, { useState } from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import Button from './components/Button';
import User from './components/User';

// User 컴포넌트를 분리해서 구현

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);
  // name과 age 바꿀수 있게 state 생성
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // 새 유저 추가
  const addUserHandler = () => {
    const addUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, addUser]);
  };

  // 삭제버튼
  const onClickDeleteButtonHandler = (id) => {
    const newUserList = users.filter(user => user.id !== id)
    setUsers(newUserList)
  }
  return (
    <>
      이름 : <input value={name} onChange={(event) => setName(event.target.value)} /><br />
      나이 : <input value={age} onChange={(event) => setAge(event.target.value)} /><br />
      <Button addUserHandler={addUserHandler} />
      <div className="style">
        {/* 반복문으로 유저 만들기 */}
        {users.map((user) => {
          return <User user={user} key={user.id} onClickDeleteButtonHandler={onClickDeleteButtonHandler} />;
        })}
      </div>
    </>
  );
};



export default App;
