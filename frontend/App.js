import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [People, SetPeople] = useState([]);
  const [Show, SetShow] = useState(false);

  const getAllPeople = () => {
    fetch("http://127.0.0.1:5000/People").then((response) => {
      response.json().then((data) => {
        SetPeople(data);
        SetShow(true);
      });
    }).catch((err) => alert("Inicialize API para poder ver os registros de pessoas"));
  };

  return (
    <div className="App">
      <button type="button" onClick={() => getAllPeople()}>Ver registro de pessoas</button>

      <table id='table' className={!Show ? 'hide' : 'show'}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          {
            People.map(item => (
              <tr key={item.nome}>
                <td>{item.nome}</td>
                <td>{item.idade}</td>
                <td>{item.profissao}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

