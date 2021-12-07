import '../css/styles.css';

function NavBar() {

  return (
    <div className="NavBar">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
	<a class="navbar-item" href="">CopyClare</a>

      </div>

      <div class="navbar-end">
	<a class="navbar-item" href="">Home</a>
	<a class="navbar-item" href="">Requirements</a>
	<a class="navbar-item" href="">Research</a>
	<a class="navbar-item" href="">HCI</a>
	<a class="navbar-item" href="">System Design</a>
	<a class="navbar-item" href="">Implementation</a>
	<a class="navbar-item" href="">Testing</a>
	<a class="navbar-item" href="">Evaluation</a>
	<a class="navbar-item" href="">Appendix</a>
      </div>
    </nav>
    </div>
  );
}


export default NavBar;
