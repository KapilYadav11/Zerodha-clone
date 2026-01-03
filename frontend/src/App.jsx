import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';  
library.add(fas);

import HomePage from './landing_page/home/HomePage'

const App = () => {
  return (
    <div>
      <HomePage />
      </div>
  )
}

export default App