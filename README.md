## 🤔️ How to add a new page
- project 폴더 안에 새로운 폴더를 만들고 "index.md" 이름의 마크다운 파일을 생성하면 됩니다.
  - 파일 이름은 크게 상관이 없는데, 사이트 주소가 깔끔하게 나오려면 index.md가 좋은 것 같습니다. 
- index.md 파일 시작에 다음의 내용을 추가해주세요
```
---
layout: default
title: Your Fancy Project Name
parent: Home
nav_order: 2208
---
```
- nav_order: 저널/학회 발표 년월  (2022년 8월 학회 -> 2208)
- Doc이 꼭 markdown 형식이 아니어도 됩니다. index.md 대신 index.html을 넣어줘도 잘 보입니다!
- publish하기 전에 자신이 작성한 내용이 어떻게 보일지 궁금하다면 jekyll을 이용하여 로컬 컴퓨터에서 확인해보실 수 있습니다.
  - https://docs.github.com/ko/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll

## 🙇‍♀️️ Comments
#### [2023.03.20] Obin
- 기본 layout이 답답해보여서 조금 손봤습니다. _sass 폴더 안에 있는 내용이니 삭제하지 말아주세요.
- 추가적으로 알고있는 페이지 만드는 꿀팁이 있다면, 혹은 개선하고 싶은 사항이 있다면 추가해주세요 👍️! 

