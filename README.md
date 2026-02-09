# ⏱️ Tik-Tok
*위치와 시간을 기반으로 상황에 맞는 음악을 추천하는 웹 프로젝트*
>**REST API**를 실제로 활용한 프로젝트를 통해 외부 데이터를 기반으로 한 서비스 구현 경험을 보여주고자 했습니다.<br/><br/>음악 추천이라는 주제는 개인적으로 음악을 자주 듣는 개인적인 취미에서 출발했으며, 같은 취미를 가진 사용자들에게도 흥미로운 경험이 될 수 있을것이라 생각해 프로젝트를 기획했습니다.

<img width="1500" height="843" alt="image" src="https://github.com/user-attachments/assets/4ce506cf-c86f-41f3-97f1-b678fd26adf2" />



<details>
  <summary><h4>👤 Role</h4></summary>

  |기획|디자인|구현|
|:-:|:-:|:-:|
|이지은|이지은|[dlwldms](https://www.github.com/317dlwldms)|
</details>

<details>
  <summary><h4>📚 Stack</h4></summary>

<img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=javascript&logoColor=white" /> <img src="https://img.shields.io/badge/SCSS-cc6699?style=flat&logo=sass&logoColor=white" />
- REST API : Geolocation API · Weather API · Spotify API
- SASS를 사용한 스타일링 css 작성
</details>

<details>
  <summary><h4>📁 Process</h4></summary>

  |Process|Description|
  |:-:|:-|
  |문제|사용자의 위치와 시간을 데이터화하여, Spotify API에 입력된 조건을 기준으로 음악을 추천하는 기능을 구현해야 한다.|
  |해결|온도, 날씨, 시간, 계절(월 기준)에 따라 추천 키워드를 정의하고, 해당 키워드를 Spotify API 검색 파라미터로 전달하는 방식으로 구성했다.|
  |결과|설정된 키워드를 기반으로 Spotify 내 콘텐츠가 검색되며 추천된 음악의 곡 정보와 아티스트 이름, 앨범 커버가 화면에 출력되도록 구현했습니다.|
</details>
