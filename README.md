# Gemini Clone App

This repository contains the source code for a web application that clones the Gemini interface, leveraging the Gemini API, Tailwind CSS, and React.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/clone-gemini-app/deploys)

## Live Demo

You can view the live application at: [https://clone-gemini-app.netlify.app/](https://clone-gemini-app.netlify.app/)

## Features

* **Gemini API Integration:** Utilizes the Gemini API to provide similar conversational capabilities.
* **React-based Frontend:** Built with React for a dynamic and responsive user interface.
* **Tailwind CSS:** Styled using Tailwind CSS for rapid UI development and consistent design.
* **Clean and Intuitive UI:** Designed to mimic the Gemini interface for a familiar user experience.
* **Responsive Design:** Works seamlessly across various screen sizes.

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **Tailwind CSS:** Utility-first CSS framework.
* **Gemini API:** Google's API for large language models.
* **Node.js & npm/yarn:** For package management and development environment.
* **Netlify:** For deployment and hosting.

## Getting Started

To run the application locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:kumsa-Mergia/gemini-clone.git
    cd gemini-clone
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Set up environment variables:**

    * Create a `.env.local` file in the root directory.
    * Add your Gemini API key:

        ```
        REACT_APP_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
        ```

    * Replace `YOUR_GEMINI_API_KEY` with your actual API key.

4.  **Run the application:**

    ```bash
    npm start  # or yarn start
    ```

    The application will be available at `http://localhost:3000`.

## Deployment

This application is deployed on Netlify. You can deploy your own version by:

1.  Creating a Netlify account.
2.  Connecting your GitHub repository to Netlify.
3.  Setting the environment variable `REACT_APP_GEMINI_API_KEY` in the Netlify settings.
4.  Deploying the site.

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request.



## Acknowledgments

* Thanks to the developers of React, Tailwind CSS, and the Gemini API.
* Special thanks to Netlify for providing easy deployment.
