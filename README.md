


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![Netlify Status](https://api.netlify.com/api/v1/badges/906e1431-6277-4e51-92ac-7bf10985bd7b/deploy-status)](https://app.netlify.com/sites/crud-employees/deploys)

# React CRUD employees

![image](https://github.com/user-attachments/assets/8301a91f-6a08-4aa8-b335-0e3d454b629e)


## Features

This code establishes a basic React application with routing capabilities and global state management. It defines three main routes and provides a structure for additional components to be integrated. The use of react-router-dom and the Context API allows for dynamic content updates based on URL changes and shared data across components.  
React Router Integration:

* Uses BrowserRouter, Route, and Routes components from react-router-dom to enable routing functionality.
* Defines three routes:
1. /: Maps to the Home component.
2. /add: Maps to the AddEmployee component.
3. /edit: Maps to the EditEmployee component.

* Global State Management:

Employs the GlobalProvider component to manage global application state using the Context API.
Wraps the entire application to make the state accessible to all components.
* Component Structure:

Imports and utilizes three components: Home, AddEmployee, and EditEmployee.
These components are likely responsible for different sections or functionalities of the application.
JSX Structure:

Uses JSX syntax to define the component structure.
Nestes GlobalProvider within BrowserRouter to ensure proper state management and routing.
Defines routes within the Routes component.

## Technologies used

This application is built with the following technologies

*   Vite
*   React

## Installation & Getting Started

1. Clone the respository to your local machine.
    ```sh
    git clone https://github.com/lalomax/React-CRUD-employees.git
    ```
1. Open directory
   ```sh
   cd React-CRUD-employees
   ```
2. Install dependencies using either npm or yarn:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```

## Usage

Personal data should be filled in the  `main.js`.

1. Navigate to the 'main.js' folder.
2. Fill in your details in the appropriate sections.
3. The application will automatically update your portfolio.

New images should be uploaded in the `public/images` directory.

## Contributing
Contributions to this project are welcome. Please ensure to follow these guidelines:

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Create a new Pull Request

## License Information
Please see the included LICENSE file for more information.

## Contact & Acknowledgements
If you need help or have any feedback, please reach out (lalomax365@gmail.com).

[contributors-shield]: https://img.shields.io/github/contributors/lalomax/React-CRUD-employees.svg?style=for-the-badge
[contributors-url]: https://github.com/lalomax/React-CRUD-employees/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lalomax/React-CRUD-employees.svg?style=for-the-badge
[forks-url]: https://github.com/lalomax/React-CRUD-employees/network/members
[stars-shield]: https://img.shields.io/github/stars/lalomax/React-CRUD-employees.svg?style=for-the-badge
[stars-url]: https://github.com/lalomax/React-CRUD-employees/stargazers
[issues-shield]: https://img.shields.io/github/issues/lalomax/React-CRUD-employees.svg?style=for-the-badge
[issues-url]: https://github.com/lalomax/React-CRUD-employees/issues
[license-shield]: https://img.shields.io/github/license/lalomax/React-CRUD-employees.svg?style=for-the-badge
[license-url]: https://github.com/lalomax/React-CRUD-employees/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/orlando-flores365/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Vitejs]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
