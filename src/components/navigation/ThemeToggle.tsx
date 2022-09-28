import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LightMode, DarkMode, Light } from '@styled-icons/material'
import { AppGlobal } from '../../config';

const Container = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

const IconContainer = styled.div`
  svg {
    margin: 0;
    padding: 0;
    color: var(--accent-color);
  }
`;

const ThemeToggle = () => {

  const [theme, setTheme] = useState<string>(AppGlobal.theme);

  const toggle = () => {
    if (document.body.hasAttribute("data-theme")) {
      document.body.removeAttribute("data-theme");
      setTheme("light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [])

  return (
    <Container>
      <IconContainer onClick={(e) => {
        e.preventDefault();
        toggle();
      }}>
        {theme === "dark" ? <LightMode size="36" /> : <DarkMode size="36" />}
      </IconContainer>
    </Container>
  );
};

export default ThemeToggle;

