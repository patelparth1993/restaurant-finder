### 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Spent around 16-18 hours on coding, however much of the time got consumed in testing as I am a decent tester not a proficient one. I would definitely make the UI more attractive and improve overall look and feel(maybe a dark mode). Also, I would have added more features/pages like restaurant details, using more data fetched from api to improve UX etc.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I think spread/rest operator(...) is pretty nifty feature and one of my favorites . I also enjoy React Hooks.

Snippet 1:
export default function userReducer(state = initUser, { type, payload }) {
switch (type) {
case actionTypes.LOGIN_USER:
return {
...state,
firstname: payload.firstname,
lastname: payload.lastname,
emailid: payload.emailid,
password: payload.password,
userLoggedIn: true,
userMessage: "Logged In!"
};
case actionTypes.ERROR:
return { ...state, userLoggedIn: false, userMessage: payload.message };
default:
return state;
}
}

### 3. How would you track down a performance issue in production? Have you ever had to do this?

Never had to do it for production. It can be done by profiling components using tools like chrome's devtool. The performance and audits tab of chrome devtool are the only tools I have used.

### 4. How would you improve the API that you just used?

API can be improved in terms of security, standards, data itself(resemblence with real world) etc. For this particular API, I think we can improve on Error prevention/handling.

### 5. Please describe yourself using JSON.

{
firstname:'Parth',
lastname:'Patel',
skills:[
'React',
'Node+Express',
'JavaScript',
'Angular',
'React Native',
'HTML5','CSS3','SaaS'
],
industry_experience:{
e-commerce:2,
CRM:1,
Banking:1
}
}
