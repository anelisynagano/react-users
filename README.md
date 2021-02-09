## React Livecode

Recreate the app, using the [wireframe](/src/D76bc514ce2f7cd832c1a8d4bfe93995a.png) and [data](/src/data.js) provided.

- on `App.js`, import the data from the previously mentioned file.
- create a `CardsList` component, that will render all of our `Card` components.
- from `App`, pass our data to the `CardsList` component as props.
- on `CardsList`, iterate over the props received from `App`, and to each element of the array, render a `Card` component. This `Card` component will pass down the props that were received by `App`.
- on `Card` component, show the image, the full name and age of the user.
