# Medium clone client app (REACT-REDUX-SAGA-TS)

This is a demo application written based on the APIs defined as part of [RealWorld demo app](https://realworld-docs.netlify.app/). This is a client side app written with
    
    1. React (Typescript) : for client side rendering
    
    2. React bootstrap: CSS for UI components
    
    3. React-redux: for state management
    
    4. react-router: for routing

    5. redux-saga: side effect management (async requests)

## How to start the app?
1. Clone the repository with
    ```sh
    git clone https://github.com/sushrut111/react-redux-typescript-demo-realworld.git
    ```
2. Navigate to the cloned directory
    ```sh
    cd react-redux-typescript-demo-realworld
    ```
3. Install dependencies
    ```sh
    npm install
    ```
4. Start the application
    ```sh
    npm run start
    ```

## Backend API
The app uses production endpoint deployed by the original authors of realworld demo app which is live at: https://api.realworld.io/api
You can deploy your own endpoint (refer the docs: https://realworld-docs.netlify.app/) and point the application towards the newer one by editing variable `API_ROOT` in the file [src/constants/api.ts](https://github.com/sushrut111/react-redux-typescript-demo-realworld/blob/master/src/constants/api.ts)

## Login for test
This app currently does not support new user registration. You can register new user as following with curl

```bash
curl 'https://api.realworld.io/api/users' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'sec-fetch-mode: cors' \
  --data-raw '{"user":{"username":"test","email":"test@example","password":"test123"}}' \
```
