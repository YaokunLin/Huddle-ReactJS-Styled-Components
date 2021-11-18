import { ThemeProvider } from 'styled-components';
import './App.css';
import { Container } from './components/styles/Container.styled'
import Header from './components/Header';
import GlobalStyles from './components/styles/GlobalStyles'
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

const themeObj = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={themeObj}>
      <>
        <GlobalStyles />
        <Header>Hubble</Header>
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item}></Card>
          )
          )}
        </Container>
        <Footer />

      </>
    </ThemeProvider>
  );
}

export default App;
