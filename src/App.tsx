import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/items';

import {ListItem} from './components/LIstItems'
import {AddArea} from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Trabalhando com react js', done: false},
    {id: 2, name: 'Trabalhando com react-native', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header> To Do List</C.Header>


       <AddArea onEnter={handleAddTask}/>


        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}


      </C.Area>
    </C.Container>
  );
}

export default App;