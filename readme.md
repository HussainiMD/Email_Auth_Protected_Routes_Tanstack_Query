# Authentication & Route Protection. Data management using Tanstack Query. A mock node server which supports Registraion, Signin and Posts API


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles






/**
 * Header
 * Body
 *  - SignIn form
 *    - List of Posts
 *  - Registration form
 * Footer
 */





# Tanstack Query
- for backend api data management (posts)


#  Routing 
 - Client Side Routing using react router
 - /signup for registration
 - /signin for log in
 - /user protected route
 - /user/posts fetches data from backend


 # custom singleton function to manage user auth
  - we do not want to store tokens in browser storage, hence using a custom in-memory function to storage and retrieval
  - in case of hard refresh, behind the scenes a new access token is fetched using refresh token


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom

Under API folder, we have server file, which is intended to start a mock server supporting registraion, login and posts api
node server.js
 

