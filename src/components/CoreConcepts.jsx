
import { CORE_CONCEPTS } from '../data.js';
import componentsImg from  '../assets/components.png';
import CoreConcept from './CoreConcept.jsx';


function CoreConcepts() {

    return (
        <div>
        <section id="core-concepts">
        <h2>{CORE_CONCEPTS[4].maintitle}</h2>
<ul>
  <CoreConcept {...CORE_CONCEPTS[0]}/>
  <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={componentsImg}/>
  <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={componentsImg}/>
</ul>
        </section>
        </div>
    );
}

export default CoreConcepts;