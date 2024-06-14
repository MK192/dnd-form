import './App.css';

// components
import MainContainer from '@components/MainContainer';

// context
import FormContext from '@context/FormInputsContext';

function App() {
  return (
    <>
      <FormContext>
        <MainContainer />
      </FormContext>
    </>
  );
}

export default App;
