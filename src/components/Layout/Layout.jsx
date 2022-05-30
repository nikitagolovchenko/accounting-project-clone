import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Nav from 'components/navigation/Nav';
import { Wrapper, Main, MainContainer } from 'components/common/styles';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Main component='main' pt={2}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </Wrapper>
  );
};

export default Layout;
