import MyApp1 from './04-describing-the-ui/01-your-first-component/App';
import MyApp2 from './04-describing-the-ui/02-importing-and-exporting-components/App';
import MyApp3 from './04-describing-the-ui/03-writing-markup-with-jsx/App';
import MyApp4 from './04-describing-the-ui/04-javascript-in-jsx-with-curly-braces/App';
import MyApp5 from './04-describing-the-ui/05-passing-props-to-a-component/App';

function App() {
  return (
    <main>
      <h1>React Docs</h1>
      <MyApp1 />
      <MyApp2 />
      <MyApp3 />
      <MyApp4 />
      <MyApp5 />
    </main>
  );
}

export default App;
