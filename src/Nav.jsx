import "./Nav.css";

function Nav() {
  return (
    <div id="Nav">
      <a target="_blank" class="logo">
        Kavin Dail
      </a>
      <br></br>

      <div class="ul">
        <div class="li">
          <a href="#landing">Home</a>
        </div>
        <div class="li">
          <a href="#about">About</a>
        </div>
        <div class="li">
          <a href="#projects">Projects</a>
        </div>
        <div class="li">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
window.addEventListener("scroll", () => {
  let header = document.querySelector("#Nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

export default Nav;
