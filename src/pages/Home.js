import React from 'react';
import TextForm from '../components/TextForm';

function Home({mode}) {
  return (
    <div className="container">
      {/* Hand the mode down to TextForm */}
      <TextForm title="ForgeText - Word Counter, Character Counter, Extra Space Remover" mode={mode}/>
    </div>
  );
}

export default Home;