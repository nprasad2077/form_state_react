# React FormData instead of useState

In this component, re-renders are minimized by using the FormData object to capture form data instead of storing the data in component state. This is useful in scenarios where you want to minimize unnecessary re-renders and improve performance. However, it does make it harder to implement features that require real-time updates of the form data, such as form validation.

Usually, when you update a state variable in a React component, the component re-renders to reflect changes. This can lead to performance issues if not handled properly, especially in forms with many inputs or complex state logic.

By using FormData, you are essentially using a local variable that doesn't trigger a re-render. Instead of updating the state every time a field changes, you can gather all the data when the form is submitted, which is much more efficient.

However, this approach might have limitations when you need to implement real-time validation or similar features that require the state to reflect the current value of the form fields immediately.
