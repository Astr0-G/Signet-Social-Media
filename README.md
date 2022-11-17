<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Astr0-G/Signet-Social-Media">
    <img src="https://cdn.discordapp.com/attachments/960590776570626098/1042591497813504040/logo2.png" alt="Logo" height="80">
  </a>

  <h3 align="center">SIGNET</h3>

  <p align="center">
    Decentralized Social Media Platform Application
    <br />
    <a href="https://github.com/Astr0-G/Signet-Social-Media"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.signet.ink">View Demo</a>
    ·
    <a href="https://github.com/Astr0-G/Signet-Social-Media/issues">Report Bug</a>
    <br/><br />
    <br />
    signet smart contract on Goerli Testnet Network <br/>
    <a href="https://goerli.etherscan.io/address/0x1952A8046B1e549CC05E680283219e855CAf1d9b#code">Signet Controllor smart contract</a><br/>
    <a href="https://goerli.etherscan.io/address/0x7c3FFEdd23710188be6e2eFdaC4a7d2fFA04523c#code">Signet FollowSys smart contract</a><br/>
    <a href="https://goerli.etherscan.io/address/0xf53B6145246810ee99E5A75E720550A0f38c0E00#code">Signet ProfileSys smart contract</a><br /><a href="https://github.com/Astr0-G/Signet-Social-Media/tree/main/signetcontract/deployments/goerli"><strong>Explore the deployment data »</strong></a>
    <br />
    
  </p>
</div>

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
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[SIGNET](https://www.signet.ink)

Always wondering if there is able to have a Blockchain Journal Book application for people to save their photos or stories on-chain which can last forever, even their offsprings could watch it which is a nice point of using blockchain.

Signet could be a good point to connect to others in this space, and I gave it a name SIGNET, it is similar to a badge or emblem which represents a user’s ideas or memories. We need to sign for every single transaction on blockchain, I found signet could be a good fit for this name. After a month of development in chainlink hackathon, the product demo is working as expected.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section contains frameworks/libraries used to bootstrap Signet, it includes the frontend and the backend.

[![Next][next.js]][next-url]  
 [![Wagmi][wagmi]][wagmi-url]  
 [![django][django]][django-url]  
 [![node.js][node.js]][node-url]  
 [![hardhat][hardhat]][hardhat-url]  
 [![vercel][vercel]][vercel-url]  
 [![python][python]][python-url]  
 [![filecoin][filecoin]][filecoin-url] [![filecoin][left]][filecoin-url] [![nftsotrage][nftsotrage]][nftsotrage-url] [![Estuary][estuary]][estuary-url] [![filecoin][right]][filecoin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

There are four folders in this project, they are all used by signet.

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- python  
  python version >= 3.7.9  
  Download from [here](https://www.python.org/downloads/)

### Installation

###### you can skip 3-5 if you are only testing frontend

1. Clone the repo
   ```sh
   git clone https://github.com/Astr0-G/Signet-Social-Media.git
   ```
2. cd into each folder besides signetapi and Install NPM packages

   ```sh
   npm install
   ```

3. cd into signetapi folder Install Python packages

   ```sh
   pip install requirements.txt
   ```

   create a .env file and put

   ```
   databaseusername = ''
   databasepassword = ''
   secert_key= ''
   ```

   please have your own database access ready  
   (localhost or remote)  
   and change the [setting](https://github.com/Astr0-G/Signet-Social-Media/blob/main/signetapi/learning/settings.py) regarding database access

   ```sh
   python manage.py runserver
   ```

4. cd into signetcontract

   ```sh
   npm hardhat test
   ```

   for test cases

   ```sh
   npm hardhat node
   ```

   but be sure to change the contract address of the [json](https://github.com/Astr0-G/Signet-Social-Media/blob/main/signetfrontend/constants/abi.json) files in the signetfrontend constants

5. cd into signetmonitor
   create a .env file and put

   ```
   rpc=''
   api=''
   ```

   ```sh
   node listenFollowed.js
   node listenSendmessage.js
   node listenUnFollowed.js
   ```

6. cd into signetfrontend

   create a .env file and put

   ```
   NEXT_PUBLIC_NFT_STORAGE_KEY=
   NEXT_PUBLIC_estuary_KEY=
   NEXT_PUBLIC_etherscanapi=
   NEXT_PUBLIC_ALCHEMYAPIKEY1=
   NEXT_PUBLIC_INFURAAPIKEY1=
   NEXT_PUBLIC_ALCHEMYAPIKEY2=
   NEXT_PUBLIC_INFURAAPIKEY2=
   ```

   ```sh
   npm dev
   ```

   if you want to run on your own api and own chain  
   you will need to replace all the api in files of this [folder](https://github.com/Astr0-G/Signet-Social-Media/tree/main/signetfrontend/components) that I am using  
   simply search keyword `fetch` in the files and replace the link after it

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Use this repo to look at useful examples of how signet can be used. Additional screenshots, code examples and demos work well in this repo.

_For more examples, please refer to the [Video](https://www.youtube.com/watch?v=uvnG4MiT0fs)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] signet api
- [x] signet smart contract monitor
- [x] signet frontend
  - [x] home tab
  - [x] explore tab
  - [x] profile tab
- [x] signet smart contract
  - [x] signet controllor
  - [x] signet followSys
  - [x] signet profileSys
- [x] filecoin integration with nft.storage/Estuary
- [ ] NFT owner tab

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Function Branch (`git checkout -b new/Function`)
3. Commit your Changes (`git commit -m 'Add some Function'`)
4. Push to the Branch (`git push origin function/Function`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/Astr0-G/Signet-Social-Media/blob/main/LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

astro - [@lil_astr_0](https://twitter.com/lil_astr_0) - wangge326@gmail.com

Project Link: [github](https://github.com/Astr0-G/Signet-Social-Media) [demo](https://www.signet.ink)

please dm on [twitter](https://twitter.com/lil_astr_0) if you need Goerli Testnet Native Token to test Signet, I am happy to help!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Astr0-G/Signet-Social-Media.svg?style=for-the-badge
[contributors-url]: https://github.com/Astr0-G/Signet-Social-Media/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Astr0-G/Signet-Social-Media.svg?style=for-the-badge
[forks-url]: https://github.com/Astr0-G/Signet-Social-Media/network/members
[stars-shield]: https://img.shields.io/github/stars/Astr0-G/Signet-Social-Media.svg?style=for-the-badge
[stars-url]: https://github.com/Astr0-G/Signet-Social-Media/stargazers
[issues-shield]: https://img.shields.io/github/issues/Astr0-G/Signet-Social-Media.svg?style=for-the-badge
[issues-url]: https://github.com/Astr0-G/Signet-Social-Media/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Astr0-G/Signet-Social-Media/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://cdn.discordapp.com/attachments/960590776570626098/1042591497813504040/logo2.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[wagmi]: https://img.shields.io/badge/wagmi.sh-20232A?style=for-the-badge&logo=&logoColor=61DAFB
[wagmi-url]: https://wagmi.sh/
[django]: https://img.shields.io/badge/Django-35495E?style=for-the-badge&logo=django&logoColor=yellowgreen
[django-url]: https://www.djangoproject.com/
[node.js]: https://img.shields.io/badge/Node.js-563D7C?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/en/
[hardhat]: https://img.shields.io/badge/Hardhat-ffff00?style=for-the-badge&logo=&logoColor=white
[hardhat-url]: https://hardhat.org/
[vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/docs
[python]: https://img.shields.io/badge/Python-20232A?style=for-the-badge&logo=python&logoColor=white
[python-url]: https://www.python.org/
[filecoin]: https://img.shields.io/badge/Filecoin-55AAFF?style=for-the-badge&logo=&logoColor=61DAFB
[filecoin-url]: https://filecoin.io/
[nftsotrage]: https://img.shields.io/badge/nft.sotrage-55AAFF?style=for-the-badge&logo=&logoColor=61DAFB
[nftsotrage-url]: https://nft.storage/
[estuary]: https://img.shields.io/badge/Estuary-55AAFF?style=for-the-badge&logo=&logoColor=61DAFB
[estuary-url]: https://estuary.tech/
[left]: https://img.shields.io/badge/(-55AAFF?style=for-the-badge&logo=&logoColor=61DAFB
[right]: https://img.shields.io/badge/)-55AAFF?style=for-the-badge&logo=&logoColor=61DAFB
