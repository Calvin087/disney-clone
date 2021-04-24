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

# Redux

Most of this is being used in Header, I guess because the header goes across the entire site, loading on every page? Things like dispatch, selector etc are here for reference.

`npm install react-redux`

`npm install @reduxjs/toolkit` [info](https://www.npmjs.com/package/@reduxjs/toolkit)

**Setting up the redux store**

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
  middleware: getDefaultMiddleware({
    // default middleware
    serializableCheck: false,
  }),
});
```

**Creating a Slice**

- What is a slice?

```js
import { createSlice } from "@reduxjs/toolkit";

// When the app starts, everything is empty.

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // When the user logs in, set these deets
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // When the logs out, set these deets tp null
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// exporting functions from userSlice...
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name; // give whole app access?
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer; // exporting the reducer???
```

**Wrapping the app in a redux provider**

```js
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

**Helpers**

```js
import { userDispatch, useSelector } from "react-redux";
```

Dispatching actions to `app/store.js`
Selector allows retrieval from `app/store.js`

**Dispatching Payloads**

```js
const handleAuth = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      setUser(result.user); // calling func from inside promise
    })
    .catch((error) => {
      alert(error.message);
    });
};

const setUser = (user) => {
  dispatch(
    // dispatching info to which store?
    setUserLoginDetails({
      // this store
      name: user.displayName, // payload
      email: user.email, // payload
      photo: user.photoURL, // payload
    })
  );
};
```
