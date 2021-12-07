import './css/styles.css';
import NavBar from './components/NavBar';
import { useEffect} from 'react';

function App() {

  useEffect(() => {
     document.title = "CopyClare";
   }, []);
  return (
    <div className="App">
  <NavBar />
    <section class="hero is-medium is-info">
      <div class="container has-text-centered">
	<div class="hero-body">
	  <p class="title">
	    CopyClare
	  </p>
	</div>

      </div>

    </section>

    <section class="hero is-medium is-light">
      <div class="container has-text-centered">
	<div class="hero-body">
	  <p class="title">
	    Features
	  </p>
	</div>

      </div>

    </section>
    <section class="hero is-medium is-dark">
      <div class="container has-text-centered">
	<div class="hero-body">
	  <p class="title">
	    Architecture
	  </p>
	</div>

      </div>

    </section>
    </div>
  );
}


export default App;
