# Reviews Demo Project with Vite

> A simple frontend demo project built with Vite and React that allows users to explore a list of reviews for various individuals. Users can navigate through the reviews, view them randomly, and get information about each person, including their image, name, job, and review text.

![Project Logo](https://res.cloudinary.com/tawfeer/image/upload/v1689971800/Review-project_weuumn.png)

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Explore Data](#explore-data)
  - [Import Reviews](#import-reviews)
  - [Setup State Value (Index)](#setup-state-value-index)
  - [Installation](#installation)
- [Usage](#usage)
  - [Render First Person](#render-first-person)
  - [Navigation](#navigation)
    - [Prev and Next](#prev-and-next)
    - [Random](#random)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Live Demo

Experience the Reviews Demo Project in action! Click the link below to access the live demo:

### [Live Demo](https://reviews-demo-esmat.netlify.app/)

Feel free to interact with the project, browse through different reviews, and enjoy the user-friendly interface. The live demo provides a hands-on experience to explore the features of the Reviews Demo Project.

## Introduction

This repository contains a small demo project built with Vite and React that showcases a reviews application. The project allows users to explore a list of reviews for different individuals, providing details such as their names, job titles, review text, and images. Users can navigate through the reviews, view them randomly, and access additional information about each individual.

The goal of this demo project is to demonstrate foundational frontend development skills, including working with React components, managing state with hooks, and implementing basic navigation functionality.

## Getting Started

Follow the steps below to set up the project and explore the reviews.

### Explore Data

Before you start, navigate to the `data.js` file and familiarize yourself with the data structure. The `data.js` file contains an array of objects, each representing a review. Each review object should include properties such as `name`, `job`, `imageUrl`, and `text`.

### Import Reviews

To get started, import the reviews data into your project. Ensure that the data is in the correct format, as specified in the previous step.

### Setup State Value (Index)

Next, set up a state variable that controls which review is currently displayed. You can use React's `useState` hook for this purpose. This state value will help manage navigation through the reviews.

### Installation

To run the application locally, follow these steps:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:

```sh
git clone https://github.com/Mohamed-Esmat/reviews-demo-project.git
```

2. **Navigate to the project directory:** Change your working directory to the project folder:

```sh
cd reviews-demo-project
```

3. **Install dependencies:** Install the necessary dependencies by running:

```sh
npm install
```

4. **Start the development server:** Finally, start the development server using Vite:

```sh
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Usage

Utilize the functionalities of the reviews demo project as described below.

### Render First Person

To display the first review in the list, access the first item in the reviews array and use its properties to render the person's image, name, job, and review text.

### Navigation

Enable users to navigate through the reviews using the following navigation options.

#### Prev and Next

Allow users to cycle through the reviews by providing buttons to display the previous and next reviews in the list. To implement this functionality, keep track of the current index in the reviews array and update it when the user clicks the previous or next button. Use the updated index to access the corresponding review from the reviews array.

#### Random

Enable users to view a random review by implementing a button with functionality to select a random index from the reviews array. Use the randomly selected index to display the corresponding review.

## Contributing

We appreciate and welcome contributions to enhance the project! To contribute, follow these steps:

1. **Fork the repository:** Start by forking this repository to your GitHub account using the "Fork" button at the top right corner of the repository page.

2. **Clone your fork:** Clone the forked repository to your local machine using the following command:

```sh
git clone https://github.com/Mohamed-Esmat/reviews-demo-project.git
```

3. **Navigate to the project directory:** Change your working directory to the project folder:

```sh
cd reviews-demo-project
```

4. **Install dependencies:** Install the necessary dependencies by running:

```sh
npm install
```

5. **Start the development server:** Run the Vite development server to work on the project:

```sh
npm run dev
```

6. **Make your changes:** Implement your changes or add new features to the project.

7. **Commit your changes:** Commit your changes with clear and descriptive commit messages:

```sh
git commit -m "Add your descriptive commit message here"
```

8. **Push your changes:** Push your changes to your forked repository:

```sh
git push origin main
```

9. **Create a pull request:** Open a pull request (PR) against the main repository. Ensure that you provide a clear description of your changes in the PR.

We value your contributions and will review your pull request as soon as possible. Together, we can make this project even better!

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute the code.

## Acknowledgements

We would like to thank the following resources and communities for their support and inspiration:

- [Figma Design](https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1) for providing the visual reference for the project.
- [Vite](https://vitejs.dev/) for enabling fast and efficient development.

## Contact

If you have any questions or suggestions regarding the project or want to report an issue, feel free to contact us at:

- **Email:** [msmt0452@gmail.com](mailto:msmt0452@gmail.com)
- **GitHub:** [Mohamed-Esmat](https://github.com/Mohamed-Esmat)

Happy exploring! We hope you find this reviews demo project helpful in honing your frontend development skills with React and Vite. Thank you for checking out the project! 🚀
