import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
<nav className="header__nav">
    <ul className="header__nav-list">
        <li className="header__nav-item">HOME</li>
        <li className="header__nav-item">ABOUT</li>
        <li className="header__nav-item">TEAM</li>
        <li className="header__nav-item">BOOKING</li>
        <li className="header__nav-item">MENU</li>
        <li className="header__nav-item">GALERIE</li>
        <li className="header__nav-item">EVENTS</li>
        <li className="header__nav-item">CONTACT</li>
    </ul>
</nav>
          <img className="header__img" alt="helm" src={}/>
          <p className="header__time"></p>
          <div className="header__block-links">
              <ul className="header__links">
                  <li className="header__link"></li>
                  <li className="header__link"></li>
                  <li className="header__link"></li>
              </ul>
          </div>
          <div className="header__block-title">
              <p className="header__text"> </p>
              <h1 className="header__title"></h1>
              <div className="header__rectangle"></div>
              <div className="header__block-buttons">
                  <button onClick="header__button_yellow"></button>
                  <button onClick="header__button"></button>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
