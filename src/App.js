
import './App.css';
import ReviewProvider from './ReviewContext';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <ReviewProvider>
      <Form />
      <List />
    </ReviewProvider>
  );
}

export default App;
