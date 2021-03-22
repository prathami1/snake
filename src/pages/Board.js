import Board from '../Board/Board';
import Header from '../components/Game'

import '../App.css';

const BoardJS = () => (
  <div className="App">
    <Header 
        title = "Snake" hrefport = '/' icon = {<i className="fas fa-chevron-left"></i>} prebutton = 'Back to' name = "Instructions"/>  
    <Board></Board>
  </div>
);

export default BoardJS;
