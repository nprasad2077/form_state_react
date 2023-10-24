# React FormData instead of useState

In this component, re-renders are minimized by using the FormData object to capture form data instead of storing the data in component state. This is useful in scenarios where you want to minimize unnecessary re-renders and improve performance. However, it does make it harder to implement features that require real-time updates of the form data, such as form validation.

Usually, when you update a state variable in a React component, the component re-renders to reflect changes. This can lead to performance issues if not handled properly, especially in forms with many inputs or complex state logic.

By using FormData, you are essentially using a local variable that doesn't trigger a re-render. Instead of updating the state every time a field changes, you can gather all the data when the form is submitted, which is much more efficient.

However, this approach might have limitations when you need to implement real-time validation or similar features that require the state to reflect the current value of the form fields immediately.

## Advantages of using FormData:

1. The form input values are automatically captured without the need to maintain a state variable for each input field.
2. The component doesn't re-render on user input.
3. The API request body can be easily built when using FormData, whereas we would need to assemble the data for submission when using useState.
4. It eliminates the need for introducing new state variables as and when the form grows.
5. When dealing with multiple forms, you might end up duplicating similar state variables across components, whereas FormData can be reused easily with just a few lines of code.
6. One thing that FormData supports out of the box is that it will handle dynamic fields automatically. i.e., If your form has dynamically generated fields (adding/removing fields based on user input), managing their state with useState requires additional handling, whereas FormData will take care of it automatically.
