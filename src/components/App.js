import React  from 'react';
import LifePhases from '../containers/life-phases';
import PhaseDetails from '../containers/phase-details';

 const App = ()=>(
     <div>
         <h2>Life Phases</h2>
         <LifePhases/>
         <hr/>
         <h2>Phase Details</h2>
         <PhaseDetails/>
     </div>
 )

export default App