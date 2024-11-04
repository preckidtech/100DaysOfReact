Day 08: Introduction to Components in React
Challenge Date: Nov 4 2024
Challenge Goal: Build a solid understanding of React components.

Overview
Today marks Day 08 of my 100-day React Challenge, where I'm gradually learning and building with React. The focus for today was on understanding components, which are foundational elements in React development.

What I Learned
Components in React:
Components are reusable building blocks that define parts of the user interface.
They can be functional or class-based.
Types of Components
Functional Components

Simple and easy to write using JavaScript functions.
Ideal for presentational tasks.
jsx
Copy code
function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}
Class Components

More powerful, created using ES6 classes.
Used when more complex logic and lifecycle methods are needed.
jsx
Copy code
class Welcome extends React.Component {
render() {
return <h1>Welcome, {this.props.name}!</h1>;
}
}
Progress Reflection
Although I have gained a foundational understanding of React components, I still have more to learn to fully grasp this concept. I’m taking my time with this challenge to ensure I develop a strong, intermediate-level understanding of React before moving on to building projects.

Next Steps
Continue exploring components with a focus on props and how components communicate with one another.
Practice creating simple components to solidify my learning.
Note to Self
This is part of a 100-day challenge. There’s no need to rush. The objective is to learn React thoroughly and eventually become skilled enough to build advanced projects.

Stay tuned for Day 09 as I dive deeper into how components interact!

Day 08 Status: Completed
Next Day Focus: Understanding props and component communication.
