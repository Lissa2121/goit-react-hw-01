// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const Header = () => {
  return <header>
      <div>logo</div>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
}

const Section = () => {
  return <section>
      <h2>Hi Me!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis hic optio? Expedita, eveniet totam a facere magni dolorum. Nihil nostrum earum aspernatur explicabo odit aliquam repellat facilis. Eveniet, soluta.
        Velit fugit assumenda aliquam, provident et inventore corrupti exercitationem mollitia quas distinctio, aliquid sit, consequatur ex earum cupiditate est harum sapiente voluptatum eligendi. Dolorum quibusdam necessitatibus molestias cumque sunt dolores?</p>
      
      <button>1</button>
      <button>2</button>
      <button>3</button>

    </section>
}

const Footer = () => {
  return <footer>
      <span> Finall!</span>
    </footer>
}

const App = () => {
  return <div>
    <Header />
    <Section />
    <Footer />

    </div>;
    

};

export default App;
