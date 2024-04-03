import React, { useState } from 'react';

const TarefaDevops = () => {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaTarefas([...listaTarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {listaTarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default TarefaDevops;

