import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx'
import { useState } from 'react';

function App() {
  //React Hooks skal bruges her, fordi det er Top Level funktionen.
  useState();

  function handleSelect(selectedButton) {
    //REACT HOOKS MÅ IKKE VÆRE HER
    console.log(selectedButton)
}
  return (
    <div>
    <Header/>
      <main>
<CoreConcepts/>

<section id="examples">
  <h2>Velkommen til IT Kartellets VS</h2>

  <menu>
  <TabButton onSelect={() => handleSelect('Join')}>Join</TabButton>
  <TabButton onSelect={() => handleSelect('Opret')}>Opret</TabButton>
  <TabButton onSelect={() => handleSelect('Anonymt')}>Anonym</TabButton>
  </menu>
</section>
      </main>
    </div>
  );
}

export default App;
