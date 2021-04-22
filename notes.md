# Media Queries

### Research this a bit

```css
@media only screen and (min-width: 768px) {
  /* anything above 768 */
  body {
    font-size: 16px;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  /* anything above 480 and max 768 */
  body {
    font-size: 15px;
  }
}
@media only screen and (min-width: 479px) {
  /* anything smaller than 479 */
  body {
    font-size: 14px;
  }
}
```

# Styled Components

[Styled Components](https://styled-components.com/)

`npm install styled-components`

Everything is contained within the component itself, like tailwind and chakra etc, but just with more text below instead of "inline".

Create our own containers like <Container> <Wrapper> and then declare them at the bottom of the page with css.

```css

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* horizontal align */
  align-items: center; /* vertical align */

  &:hover { /* add hover states inside */

  }
`;

```

### Styled Children + Media Queries

```js
<Nav>
  <Logo>
    <img src="images/logo.svg" />
  </Logo>
</Nav>
```

```css

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: block;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    /* on mobile display nothing */
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img { /* Image INSIDE link tag */
      height: 20px;
    }
  }
`;
`;

```

- What is styled.section vs styled.div .img?
- inline block vs block
- position: relative;

### Section & Div

![alt](notes-images/Screenshot%202021-04-22%20at%2010.07.00.png)

# React Router Dom

Inside App.js

`npm install react-router-dom`

```js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
```
