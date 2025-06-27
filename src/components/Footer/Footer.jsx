import styled, { createGlobalStyle } from 'styled-components';

// Global style
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const FooterWrapper = styled.div`
  background-color: #4361ee;
  color: #fff;
  width: 100vw;
  padding: 2rem 1rem;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const FooterAuthor = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <>
      <GlobalStyle />
      <FooterWrapper>
        <FooterContent>
          <FooterTitle>Movie App</FooterTitle>
          <FooterAuthor>Created by Royhan</FooterAuthor>
        </FooterContent>
      </FooterWrapper>
    </>
  );
}

export default Footer;
