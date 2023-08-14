# Zemoga

[![Reactnative][reactnative]][reactnative-url] [![typescript][typescript]][typescript-url] [![Postman][postman]][postman-url]

## Description

Technical test for Zemoga.

## Install

```bash
git clone
yarn
yarn android
```

## Architecture

The proposed architecture aim's is to make the application agnostic of what comes from outside, by using domains, which transform outside data into app known data by using mappers.

This way, if something changes outside the app, there's only one place to adjust the changes, which is in the respective class (Post, User, Comment)

## Third Party Libraries

- Axios:
  - Most used library to handle api calls. We got a singleton pattern by axios.create
    Redux and React-Redux:
- Redux Toolkit - React Redux:
  - To allow the app work with redux

* react-native-vector-icons:
  - One of the most complete library for icons
    <!-- MARKDOWN LINKS & IMAGES -->
    <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[reactnative]: https://img.shields.io/badge/reactnative-black.svg?style=for-the-badge&logo=react&colorB=555
[reactnative-url]: https://reactnative.dev/
[product-screenshot]: images/screenshot.png
[postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[postman-url]: https://www.postman.com/
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
