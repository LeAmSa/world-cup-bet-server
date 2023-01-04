<a name="readme-top"></a>

[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://drive.google.com/uc?id=1FJh3bgOnMzPFNF0x2QCck9NTgrnc3hrM" alt="Logo" width="200">
  </a>

  <h3 align="center">Na Trave API</h3>
  <h4 align="center">Status: DONE ✅ </h4>
  <div align="center">
  <a href="http://world-cup-bet-server.vercel.app" target="_blank">
	   🚀 Access the API on vercel
  </a>
  </div>
</div>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running">Running the application</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a name="about-the-project"></a>

API server for [World Cup Bet Web](https://github.com/LeAmSa/world-cup-bet-web) project.

The objective was to develop a website for bets on group-stage matches of World Cup Qatar 2022.

_Project developed during the event from [Codar.me](https://codar.me/input)._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<a name="built-with"></a>

This project was built with the following main frameworks/libraries.

- [![Vite][nodejs-badge]][nodejs-url]
- [![Javascript][javascript-badge]][javascript-url]
- [![Koa][koa-badge]][koa-url]
- [![Prisma][prisma-badge]][prisma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<a name="getting-started"></a>

### Prerequisites

<a name="prerequisites"></a>

- Resources needed
  - [Git][git-url]
  - [Node.js][nodejs-url]
  - A code editor (ex: [Visual Studio Code][vscode-url])

### Installation

<a name="installation"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/LeAmSa/world-cup-bet-server.git
   ```
2. Enter the project folder
   ```sh
   cd world-cup-bet-server
   ```
3. Install NPM packages

   ```sh
   npm install
   ```

4. Create a `.env` file and enter your `DATABASE_URL` and `JWT_SECRET` keys like in `.env.example`
   ```js
   DATABASE_URL = "ENTER YOUR DATABASE URL";
   JWT_SECRET = "ENTER YOUR JTW SECRET";
   ```

### Running the application

<a name="running"></a>

- Run the application in dev mode
  ```sh
   npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

## Features

<a name="features"></a>

- [x] GET User login
- [x] POST User create
- [x] GET Matches list
- [x] POST Bets for matches
- [x] GET Bets from users

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a name="license"></a>

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[logo]: https://drive.google.com/uc?id=10sQ1VZYdwZ30gkp73-O1L8HszvUT23IQ
[license-shield]: https://img.shields.io/github/license/LeAmSa/world-cup-bet-server?style=for-the-badge
[license-url]: https://github.com/LeAmSa/world-cup-bet-server/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leamsa
[git-url]: https://git-scm.com/
[nodejs-url]: https://nodejs.org/en/
[vscode-url]: https://code.visualstudio.com/
[nodejs-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[typescript-badge]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[javascript-url]: https://www.javascript.com/
[javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[express-url]: https://expressjs.com/
[express-badge]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[koa-url]: https://koajs.com/
[koa-badge]: https://img.shields.io/badge/Koa-33333D?style=for-the-badge&logo=koa&logoColor=white
[prisma-url]: https://www.prisma.io/
[prisma-badge]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
