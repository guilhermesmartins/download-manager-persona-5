import React from 'react';
import { render } from 'react-dom';
import { ListDownloadsTitle } from './components/Title';
import { GlobalStyle } from './styles/GlobalStyle';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App: React.FC = () => {
  return (
    <>
      <ListDownloadsTitle>LoaD</ListDownloadsTitle>
      {/* <Logo src='' alt='persona styled logo' /> */}
      <GlobalStyle />
    </>
  )
}

render(<App />, mainElement)
