# React FormData instead of useState

In this component, re-renders are minimized by using the FormData object to capture form data instead of storing the data in component state. This is useful in scenarios where you want to minimize unnecessary re-renders and improve performance. However, it does make it harder to implement features that require real-time updates of the form data, such as form validation.
