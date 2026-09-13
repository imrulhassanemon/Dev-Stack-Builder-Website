# 🚀 DevStack — Development Stack Builder

A modern and responsive React application that helps developers explore different technologies and build their ideal development stack.

## ✨ Features

* 🧩 **Explore Technologies** — Browse technologies with icons, descriptions, categories, ratings, and difficulty levels.
* 🛠️ **Build Your Own Stack** — Add technologies to your personal stack.
* 🔔 **Interactive Stack Management** — Prevent duplicates, remove technologies, clear the stack, and show toast notifications.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* Lucide React
* JSON
* Vite

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child. **State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it?

`useState` stores and updates changing data. I used it for the selected technologies (`yourStack`), the mobile menu, and the technology-fetch promise.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is normally used for side effects such as fetching data. In this project, I **did not use `useEffect`**. I used React's `use()` with `Suspense` to handle the JSON fetch.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and efficiently update the list when something changes.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

I used it in the **Your Stack** component:

```tsx
{yourStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Show selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component?

A parent passes data through **props**. A child can send data back by calling a function passed by the parent.

In this project, `Technologies` passes `yourStack` and `setYourStack` to the child components.
