
import { CORE_CONCEPTS } from '../data.js';
import componentsImg from  '../assets/components.png';
import CoreConcept from './CoreConcept.jsx';


function CoreConcepts() {

    return (
        <div>
        <section id="core-concepts">
        <h2>Random Informationer</h2>
<ul>
  {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept> )}

</ul>
        </section>
        </div>
    );
}

export default CoreConcepts;