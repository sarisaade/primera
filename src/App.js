import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';




function App() {
  return (
    <div className="App">

<Usuario nombre= "Maria" cargo="gerente general" conoceme ="cv de Maria" backgroundColor= "#ff1493" />
<Usuario nombre= "Luis" cargo="gerente general" imagen={require('./sour candy.jpg')}conoceme ="cv de Carlos"backgroundColor="#e0ffff"/>
<Usuario nombre= "Pedro" cargo="gerente general" conoceme ="cv de Pedro"/>

     
    </div>
  );
}

export default App;
