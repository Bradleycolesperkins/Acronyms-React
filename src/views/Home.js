import React from 'react';

import Categories from '../components/Categories';
import Faq from '../components/Faq';
import Team from '../components/Team';

function Home() {
  return (
    <div className="Home">
      IM IN HOME
        <Categories/>
        <Faq/>
        <Team/>
    </div>
  );
}

export default Home;
