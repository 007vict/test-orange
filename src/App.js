import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import classes from "./css/index.module.css"

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
