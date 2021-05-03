
import { Container, Row } from 'react-bootstrap';
import './App.css';
import MainForm from './components/MainForm';
import NavigationBar from './components/NavigationBar';



function App() {
  return (
    <div className="App">
    <NavigationBar/>     
       <Container>
       <MainForm/>
         <Row>
           
         </Row>

       </Container>
       
    </div>
  );
}

export default App;
