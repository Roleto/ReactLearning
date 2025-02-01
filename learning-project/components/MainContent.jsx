import Header from '../components/Header/Header.jsx';
import { useState } from 'react';
import CoreConceptList from '../components/CoreConceptList.jsx';
import TabMenu from '../components/TabMenu.jsx';
import TabContent from '../components/TabContent.jsx';

import { EXAMPLES, CORE_CONCEPTS } from '../src/data.js';

export default function MainContent() {
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    
    const [selectedTopic, setSelectedTopic] = useState();
    
//   return (
//       <main>
//         <section id="core-concepts">
//           <h2>Core Concepts</h2>
//           <CoreConceptList concepts={CORE_CONCEPTS} />
//         </section>
//         <section id="examples">
//           <h2>Examples</h2>
//           <TabMenu selectedTopic={selectedTopic} onSelect={handleSelect} />
//           <TabContent selectedTopic={selectedTopic} examples={EXAMPLES} />
//         </section>
//       </main>
}


