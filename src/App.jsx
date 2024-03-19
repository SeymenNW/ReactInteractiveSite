import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx'
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  console.log('App executed');

  //Dette er et eksempel på useState / UI Opdatering.
  const [selectedTopic, setSelectedTopic ] = useState();

  function clearSelectedTopic() {
    setSelectedTopic(null);
  }

  function handleSelect(selectedButton) {

    //Dette er et eksempel på opdatering af selectedTopic
    setSelectedTopic(selectedButton);
    console.log(selectedButton)
}
  return (
    <div>
    <Header/>
      <main>
<CoreConcepts/>

<section id="examples">
  <h2>Information om React (Delprodukt 4. Semester)</h2>

  <menu>
  <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
  <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>PROPS</TabButton>
  <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>STATE</TabButton>
  </menu>
{!selectedTopic ? <p>Please Select Topic</p>  : 

  <div id="tab-content">

<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>
    {EXAMPLES[selectedTopic].code}
  </code>
</pre>
<button onClick={clearSelectedTopic}>Close Tab</button>
  </div> }
</section>
{selectedTopic}
      </main>
    </div>
  );
}

export default App;


