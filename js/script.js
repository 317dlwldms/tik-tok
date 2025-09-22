const date = document.querySelector(".simple .date p");
const time = document.querySelector(".simple .time p");
const dateCas = document.querySelector(".casual .date p");
const timeCas = document.querySelector(".casual .time p");
const frontAlert = document.querySelector(".front-alert")
const button = document.querySelector(".front-alert button");
const spotifyBox = document.querySelectorAll(".spotify-box");
const dailyWrap = document.querySelectorAll(".daily-wrap");
const nowLocation = document.querySelectorAll(".daily-text p span");
const weathers = document.querySelectorAll(".weather");
const temp = document.querySelectorAll(".temp");
const weatherSvg = document.querySelectorAll(".daily-svg .svg");
const spotifyTitle = document.querySelectorAll(".spotify-title");
const spotifyArtist = document.querySelectorAll(".spotify-artist");
const spotifyCover = document.querySelectorAll(".cover-img");
const spotifyLinkPlay = document.querySelectorAll(".spotify-play");
const spotifyReset = document.querySelectorAll(".spotify-reset");

const spotifySong = document.querySelector(".spotify-wrap");

const dailyDenied = document.querySelector(".daily-denied");

const KAKAO_API_KEY = "2a785fad85c1d06a70ea54079ad19526";
const WEATHER_API_KEY = "9587d863dcea4d91450934913ca49545";
const clientId = "b667e080d2eb4a1b9cc5a39c35b3dcbc";
const clientSecret = "98e3617484034e978c296b70d2373ff1";
const encoded = btoa(`${clientId}:${clientSecret}`);

function svgClear() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="맑음">
<path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgWind() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="바람">
<path d="M12.8 19.6C13.0535 19.7901 13.3486 19.9173 13.6609 19.971C13.9732 20.0248 14.2938 20.0035 14.5963 19.909C14.8988 19.8145 15.1745 19.6495 15.4007 19.4276C15.6269 19.2056 15.7972 18.9331 15.8974 18.6325C15.9976 18.3318 16.0249 18.0117 15.9771 17.6984C15.9293 17.3851 15.8078 17.0877 15.6225 16.8306C15.4372 16.5735 15.1935 16.3641 14.9114 16.2197C14.6293 16.0753 14.3169 16 14 16H2M17.5 8C17.7557 7.65909 18.0943 7.38919 18.4836 7.21594C18.8729 7.04269 19.3001 6.97183 19.7245 7.0101C20.1489 7.04837 20.5565 7.1945 20.9086 7.4346C21.2606 7.6747 21.5455 8.00081 21.7361 8.38197C21.9266 8.76312 22.0166 9.18666 21.9975 9.61237C21.9783 10.0381 21.8507 10.4518 21.6266 10.8143C21.4026 11.1768 21.0896 11.476 20.7174 11.6836C20.3452 11.8911 19.9261 12 19.5 12H2M9.8 4.4C10.0535 4.20986 10.3486 4.08268 10.6609 4.02895C10.9732 3.97523 11.2938 3.99648 11.5963 4.09097C11.8988 4.18546 12.1745 4.35048 12.4007 4.57243C12.6269 4.79438 12.7972 5.0669 12.8974 5.36754C12.9976 5.66819 13.0249 5.98834 12.9771 6.30162C12.9293 6.6149 12.8078 6.91233 12.6225 7.16942C12.4372 7.42651 12.1935 7.63588 11.9114 7.78029C11.6293 7.92469 11.3169 8 11 8H2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgCloud() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17.5 19H9.00004C7.7019 18.9997 6.42943 18.6384 5.32481 17.9565C4.2202 17.2746 3.32696 16.2989 2.74491 15.1386C2.16286 13.9783 1.91493 12.679 2.02883 11.3858C2.14273 10.0927 2.61397 8.85671 3.38988 7.81598C4.1658 6.77526 5.21583 5.97079 6.42264 5.49249C7.62944 5.01418 8.94548 4.88087 10.2237 5.10747C11.5019 5.33406 12.6919 5.91162 13.6608 6.77561C14.6296 7.6396 15.3391 8.75598 15.71 10H17.5C18.6935 10 19.8381 10.4741 20.682 11.318C21.5259 12.1619 22 13.3065 22 14.5C22 15.6935 21.5259 16.8381 20.682 17.682C19.8381 18.5259 18.6935 19 17.5 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgClouds() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="구름">
<path d="M22 10.0001C22 9.20441 21.684 8.44135 21.1214 7.87874C20.5587 7.31613 19.7957 7.00006 19 7.00006H16.793C16.4538 5.80639 15.721 4.76245 14.7136 4.03779C13.7062 3.31312 12.4835 2.95028 11.2439 3.0082C10.0043 3.06611 8.82065 3.54137 7.88523 4.35681C6.94981 5.17224 6.31752 6.27995 6.09104 7.50006M17.5 21.0001H9.00004C7.7019 20.9997 6.42943 20.6384 5.32481 19.9565C4.2202 19.2746 3.32696 18.299 2.74491 17.1387C2.16286 15.9783 1.91493 14.679 2.02883 13.3859C2.14273 12.0927 2.61397 10.8568 3.38988 9.81604C4.1658 8.77531 5.21583 7.97085 6.42264 7.49254C7.62944 7.01424 8.94548 6.88093 10.2237 7.10752C11.5019 7.33411 12.6919 7.91167 13.6608 8.77566C14.6296 9.63965 15.3391 10.756 15.71 12.0001H17.5C18.091 12.0001 18.6761 12.1165 19.2221 12.3426C19.7681 12.5687 20.2642 12.9002 20.682 13.3181C21.0999 13.7359 21.4313 14.232 21.6575 14.778C21.8836 15.3239 22 15.9091 22 16.5001C22 17.091 21.8836 17.6762 21.6575 18.2221C21.4313 18.7681 21.0999 19.2642 20.682 19.682C20.2642 20.0999 19.7681 20.4314 19.2221 20.6575C18.6761 20.8837 18.091 21.0001 17.5 21.0001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgRain() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="비">
<path d="M3.99997 14.899C3.25701 14.1399 2.69654 13.2217 2.36101 12.214C2.02547 11.2062 1.92368 10.1353 2.06333 9.08232C2.20299 8.02938 2.58043 7.02202 3.16707 6.13655C3.75371 5.25109 4.53416 4.51074 5.44931 3.97157C6.36445 3.43241 7.3903 3.10857 8.44914 3.0246C9.50798 2.94062 10.572 3.09871 11.5607 3.48688C12.5494 3.87505 13.4368 4.48313 14.1557 5.26506C14.8746 6.04698 15.4061 6.98225 15.71 8.00002H17.5C18.4655 7.99991 19.4054 8.31034 20.181 8.88546C20.9565 9.46058 21.5265 10.2699 21.8067 11.1938C22.087 12.1178 22.0627 13.1074 21.7373 14.0164C21.412 14.9254 20.8028 15.7057 20 16.242M9.19997 22L12.2 15M8.99997 13L5.99997 20M17 13L14 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgSnow() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="눈">
<path d="M10 20L8.75 17.5L6 18M10 4L8.75 6.5L6 6M14 20L15.25 17.5L18 18M14 4L15.25 6.5L18 6M17 21L14 15M14 15H10M14 15L15.5 12M10 15L7 21M10 15L8.5 12M17 3L14 9M14 9L15.5 12M14 9H10M15.5 12H22M2 12H8.5M8.5 12L10 9M10 9L7 3M20 10L18.5 12L20 14M4 10L5.5 12L4 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgThunder() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="천둥번개">
<path d="M5.99997 16.326C4.9462 15.8256 4.03419 15.0698 3.34683 14.1273C2.65947 13.1848 2.21855 12.0855 2.06415 10.9292C1.90975 9.77291 2.04677 8.59638 2.46275 7.50653C2.87873 6.41669 3.56048 5.44808 4.44603 4.68874C5.33159 3.9294 6.39288 3.40342 7.53343 3.15859C8.67399 2.91376 9.85764 2.95785 10.9768 3.28686C12.096 3.61587 13.1152 4.21935 13.9418 5.04247C14.7684 5.86559 15.3762 6.88223 15.71 8.00001H17.5C18.6515 7.998 19.7599 8.43748 20.5972 9.22801C21.4344 10.0185 21.9368 11.0999 22.0009 12.2496C22.0649 13.3993 21.6858 14.5299 20.9416 15.4085C20.1973 16.2872 19.1446 16.8471 18 16.973M13 12L9.99997 17H14L11 22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgMist() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="안개">
<path d="M3.99997 14.899C3.25701 14.1399 2.69654 13.2217 2.36101 12.214C2.02547 11.2062 1.92368 10.1353 2.06333 9.08232C2.20299 8.02938 2.58043 7.02202 3.16707 6.13655C3.75371 5.25109 4.53416 4.51074 5.44931 3.97157C6.36445 3.43241 7.3903 3.10857 8.44914 3.0246C9.50798 2.94062 10.572 3.09871 11.5607 3.48688C12.5494 3.87505 13.4368 4.48313 14.1557 5.26506C14.8746 6.04698 15.4061 6.98225 15.71 8.00002H17.5C18.4655 7.99991 19.4054 8.31034 20.181 8.88546C20.9565 9.46058 21.5265 10.2699 21.8067 11.1938C22.087 12.1178 22.0627 13.1074 21.7373 14.0164C21.412 14.9254 20.8028 15.7057 20 16.242M16 17H6.99997M17 21H8.99997" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgMoon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="달">
<path d="M20.985 12.4859C20.8912 14.2221 20.2966 15.8939 19.273 17.2993C18.2494 18.7047 16.8406 19.7836 15.217 20.4054C13.5933 21.0273 11.8243 21.1655 10.1237 20.8034C8.42318 20.4414 6.86392 19.5944 5.63442 18.3651C4.40493 17.1357 3.55785 15.5765 3.19558 13.876C2.83331 12.1755 2.97136 10.4065 3.59304 8.78273C4.21472 7.159 5.29342 5.7501 6.69874 4.72635C8.10406 3.70259 9.77583 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.8869 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.9749 12.8049 16.323 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgClearDay() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgClearNight() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20.985 12.4859C20.8912 14.2221 20.2966 15.8939 19.273 17.2993C18.2494 18.7047 16.8406 19.7836 15.217 20.4054C13.5933 21.0273 11.8243 21.1655 10.1237 20.8034C8.42318 20.4414 6.86392 19.5944 5.63442 18.3651C4.40493 17.1357 3.55785 15.5765 3.19558 13.876C2.83331 12.1755 2.97136 10.4065 3.59304 8.78273C4.21472 7.159 5.29342 5.7501 6.69874 4.72635C8.10406 3.70259 9.77583 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.8869 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.9749 12.8049 16.323 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgFewCloudDay() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2V4M4.92996 4.93L6.33996 6.34M20 12H22M19.07 4.93L17.66 6.34M15.947 12.65C16.07 11.9045 15.9794 11.1394 15.6857 10.4432C15.3919 9.74711 14.9069 9.14841 14.287 8.71648C13.667 8.28455 12.9374 8.03704 12.1826 8.00262C11.4278 7.96821 10.6787 8.14828 10.022 8.522M13 22H6.99996C6.05393 21.9998 5.12737 21.7312 4.32788 21.2255C3.5284 20.7197 2.8888 19.9975 2.48339 19.1427C2.07797 18.288 1.92336 17.3358 2.03752 16.3966C2.15168 15.4575 2.52992 14.5701 3.12832 13.8373C3.72672 13.1046 4.52071 12.5567 5.41808 12.2572C6.31545 11.9577 7.27938 11.9189 8.1979 12.1454C9.11642 12.3718 9.95185 12.8542 10.6072 13.5366C11.2625 14.2189 11.7108 15.0731 11.9 16H13C13.7956 16 14.5587 16.3161 15.1213 16.8787C15.6839 17.4413 16 18.2044 16 19C16 19.7956 15.6839 20.5587 15.1213 21.1213C14.5587 21.6839 13.7956 22 13 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
function svgFewCloudNignt() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.376 14.5121C19.2346 14.1415 19.9947 13.5753 20.5956 12.8588C21.1965 12.1422 21.6216 11.2951 21.837 10.3851C21.985 9.76009 21.178 9.41509 20.589 9.67109C19.8531 9.98941 19.0385 10.0792 18.2509 9.9289C17.4633 9.77856 16.7391 9.39501 16.1722 8.828C15.6053 8.26099 15.2219 7.5367 15.0717 6.74909C14.9215 5.96149 15.0115 5.14693 15.33 4.41109C15.585 3.82209 15.24 3.01609 14.614 3.16309C13.38 3.45628 12.2707 4.13296 11.4453 5.09598C10.6199 6.05899 10.1209 7.25879 10.02 8.52309M13 16.0001C13.7956 16.0001 14.5587 16.3162 15.1213 16.8788C15.6839 17.4414 16 18.2044 16 19.0001C16 19.7957 15.6839 20.5588 15.1213 21.1214C14.5587 21.684 13.7956 22.0001 13 22.0001H6.99996C6.05393 21.9999 5.12737 21.7313 4.32788 21.2256C3.5284 20.7198 2.8888 19.9976 2.48339 19.1428C2.07797 18.2881 1.92336 17.3358 2.03752 16.3967C2.15168 15.4576 2.52992 14.5702 3.12832 13.8374C3.72672 13.1047 4.52071 12.5568 5.41808 12.2573C6.31545 11.9578 7.27938 11.919 8.1979 12.1455C9.11642 12.3719 9.95185 12.8543 10.6072 13.5366C11.2625 14.219 11.7108 15.0732 11.9 16.0001H13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

function getWeatherSvg(openWeatherId, openWeatherIcon) {
    if (openWeatherIcon === "01d") return { html: svgClearDay(), cls: 'clear' };
    if (openWeatherIcon === "01n") return { html: svgClearNight(), cls: 'clear' };
    if (openWeatherIcon === "02d") return { html: svgFewCloudDay(), cls: 'clouds' };
    if (openWeatherIcon === "02n") return { html: svgFewCloudNignt(), cls: 'clouds' };

    //thunder 200 - 232
    if (openWeatherId >= 200 && openWeatherId <= 232) return { html: svgThunder(), cls: 'thunder' };
    //rain 300 - 321
    if (openWeatherId >= 300 && openWeatherId <= 321) return { html: svgRain(), cls: 'rain' };
    //rain 500 - 531
    if (openWeatherId >= 500 && openWeatherId <= 531) return { html: svgRain(), cls: 'rain' };
    //snow 600 - 622 
    if (openWeatherId >= 600 && openWeatherId <= 622) return { html: svgSnow(), cls: 'snow' };
    //mist 701 - 781
    if (openWeatherId >= 701 && openWeatherId <= 781) return { html: svgMist(), cls: "mist" };
    //clear 800
    if (openWeatherId === 800) return { html: svgClear(), cls: 'clear' };
    //clouds 801 - 804
    if (openWeatherId >= 801 && openWeatherId <= 804) return { html: svgClouds(), cls: "clouds" };
    //fallback
    return { html: svgCloud(), cls: 'clouds' };
}

function renderWeather(weather) {
    const id = weather.weather[0].id;
    const icon = weather.weather[0].icon;
    const nowWeaher = weather.weather[0].description;
    const nowTemp = Math.round(weather.main.temp);

    const { html, cls } = getWeatherSvg(id, icon);

    weatherSvg.forEach(e => {
        e.className = 'icon' + cls;
        e.innerHTML = html;
        e.setAttribute('aria-hidden', 'false');
        e.setAttribute('role', 'img');
        e.setAttribute('aria-label', nowWeaher);
    })

    weathers.forEach((e) => {e.innerHTML = nowWeaher; })
    temp.forEach((e)=>{e.innerHTML = `${nowTemp}°C`;})
}

async function pickSong(thisWeather, thisTemp) {
    const thisHour = new Date().getHours();
    const thisMonth = new Date().getMonth();

    const keywordPool = [];

    // 온도
    if (thisTemp > 30) keywordPool.push("여름");
    else if (thisTemp < 10) keywordPool.push("겨울", "크리스마스");

    // 날씨
    if (thisWeather === "Rain") keywordPool.push("비가 오는 날엔", "비", "유재하", "비와 당신");
    else if (thisWeather === "Snow") keywordPool.push("눈", "크리스마스","캐롤");

    // 시간
    if (thisHour >= 6 && thisHour < 9) keywordPool.push("화", "락 밴드","무한도전","윤도현","LEE CHANHYUK", "queen");
    if (thisHour >=1 && thisHour < 5) keywordPool.push("뷔", "백예린", "김광석","장기하","NewJeans","박원","크러쉬","폴킴","죠지")
    if ((thisHour >= 23 || thisHour < 1) || thisWeather === "Atmosphere") keywordPool.push("클래식", "재즈","LEE CHANHYUK");
    if (thisWeather === "Clear" || thisHour < 12 && thisHour > 9) keywordPool.push("IU", "윤도현", "무한도전");
    if (thisHour < 16 && thisWeather >= 12) keywordPool.push("RIIZE", "NCT","aespa","ive","exo","g-dragon","triple h","펜타곤", "bts");
    if (thisWeather === "Clear" || thisHour >= 18 && thisHour < 20) keywordPool.push("발라드","박원","크러쉬","폴킴","죠지");

    // 계절
    if (thisMonth >= 3 && thisMonth <= 5) keywordPool.push("봄", "버스커 버스커", "10CM", "newjeans","LEE CHANHYUK","봄이 좋냐","벚꽃엔딩", "볼빨간사춘기");
    if (thisMonth >= 6 && thisMonth <= 8) keywordPool.push("여름", "f(x)");
    if (thisMonth >= 9 && thisMonth <= 10) keywordPool.push("가을", "발라드", "유재하", "성시경", "테이", "시간과 낙엽","김광석","다비치");
    if (thisMonth >= 11 || thisMonth <=2) keywordPool.push("겨울", "크리스마스", "레드벨벳")
    keywordPool.push("르세라핌", "아일릿", "dua lipa","doja cat","카더가든","자우림","day6","queen","g-dragon","triple h","LEE CHANHYUK","Taylor Swift","문문","잔나비","BRUNO MARS","레드벨벳","AJR","LADY GAGA","Justin Bieber","Billie Eilish","Sam Smith","Charlie Puth","Troye Sivan","장기하","김광석","NewJeans","블랙핑크","ALLDAY PROJECT wicked","jennie","aespa","ive", "kiiikiii","다비치","자우림", "케이시","f(x)", "소녀시대", "트와이스", "BTOB", "IU", "백예린", "윤도현" ,"AKMU" ,"이승환", "성시경", "버스커버스커", "10CM", "정승환")

    const keyword = keywordPool[Math.floor(Math.random() * keywordPool.length)];

    const tokenData = await getSpotifyToken();
    const token = tokenData.access_token;

    const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(keyword)}&type=track&limit=10&market=KR`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    const tracks = data.tracks.items;
    if (!tracks.length) return;

    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    const trackTitle = randomTrack.name;
    const trackArtist = randomTrack.artists[0].name;
    const trackCover = randomTrack.album.images[0].url;
    const trackLink = randomTrack.external_urls.spotify;

    const track = {
        name: randomTrack.name,
        preview_url : randomTrack.preview_url
    }

    spotifyTitle.forEach(e => e.innerHTML = trackTitle)
    spotifyArtist.forEach(e => e.innerHTML = ` - ${trackArtist}`)
    spotifyCover.forEach(e => e.querySelector("img").src = trackCover)
    spotifyCover.forEach(e => e.querySelector("img").alt = trackTitle + " " + trackArtist)
    spotifyCover.forEach(e => e.dataset.info = trackTitle + " - " + trackArtist)
    spotifyLinkPlay.forEach(e=>e.href = trackLink)
    
    
    spotifySongMove();
    tooltipMove();
}

function spotifySongMove() {
    
    const spotifyBox = document.querySelector(".spotify-box").clientWidth;
    const spotifyNow = document.querySelector(".spotifynow").clientWidth;
    const spotifyTitleArtist = document.querySelector(".spotify-title-artist").offsetWidth;
    const songWidth = spotifySong.clientWidth;
    const songWrap = spotifyBox - spotifyNow - 10;

    if (spotifyTitleArtist <= songWidth) {
        if (spotifyNow >= spotifyBox * 2) {
            spotifySong.classList.remove(".move")
            spotifySong.classList.add("moves")
        } else {
            spotifySong.classList.remove("moves")
            spotifySong.classList.add("move");
        }
    }else{
        spotifySong.classList.remove("move");
        spotifySong.classList.remove("moves");
    }
    
}

async function getSpotifyToken() {
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
        "Authorization": "Basic " + encoded,
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    });
    return res.json();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        useDefaultLocation();
    }
}

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetchRegion(lat, lon);
}

function error(err) {
    const lat = 37.4979;
    const lon = 127.0276;

    fetchRegion(lat, lon);
    dailyDenied.classList.add("active")
}

function useDefaultLocation() {
    const lat = 37.4979;
    const lon = 127.0276;

    fetchRegion(lat, lon);
    dailyDenied.classList.add("active")
}

function fetchRegion(lat, lon) {
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`, {
        headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` }
        })
        .then(res => res.json())
        .then(data => {
            const region = data.documents[0];
            const city = `${region.region_1depth_name} ${region.region_2depth_name}`;
            
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(weather => {
                    const thisTemp = weather.main.temp;
                    const thisWeather = weather.weather[0].main;
                    renderWeather(weather);
                    pickSong(thisWeather, thisTemp);
                    spotifySongMove();
                    spotifyReset.forEach(e => {
                        e.addEventListener("click", () => {
                            pickSong(thisWeather, thisTemp);
                    })
                    })
                    nowLocation.forEach(e=>e.innerHTML = city)
                });

        })
}

function dateSet() {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (day < 10) {
        day = "0" + day;
    };

    let monthEn = month;
    const monthEns = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    monthEn = monthEns[monthEn];
    let weeks = today.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let weeksEn = today.getDay();
    const weekEn = ["SUN", "MON", "THU", "WED", "THR", "FRI", "SAT"];
    weeks = week[weeks];
    weeksEn = weekEn[weeksEn];

    date.innerHTML = `${month}월 ${day}일 (${weeks})`
    dateCas.innerHTML = `${monthEn}<span>${weeksEn} ${day}</span>`
}

function timeSet() {
    const today = new Date();
    const secLine = document.querySelectorAll(".sec");
    const minLine = document.querySelectorAll(".min");
    const hourLine = document.querySelectorAll(".hour");
    const secLineWrap = document.querySelector(".sec-line");
    const minLineWrap = document.querySelector(".min-line");
    const hourLineWrap = document.querySelector(".hour-line");

    let hourset = "오전";
    let hoursetEn = "AM";
    let hour = today.getHours();
    let hours = hour
    if (hours < 10) {
        hours = "0" + hour;
    }
    if (hours > 12) {
        hourset = "오후";
        hoursetEn = "FM";
        hours = hours - 12;
        if(hours < 10){
            hours = "0" + hours
        }
    }
    if (hours == 0) {
        hours = 12;
    }
    let min = today.getMinutes();
    let mins = min;
    if (mins < 10) {
        mins = "0" + min;
    }
    let sec = today.getSeconds();

    let secDeg = sec * 6;
    let minDeg = (min + sec / 60) * 6;
    let hourDeg = (hour % 12 + min / 60) * 30;

    
    time.innerHTML = `${hourset} ${hours}:${mins}`;
    timeCas.innerHTML = `${hoursetEn}<span>${hours}<span class="blink">:</span>${mins}</span>`

    secLine.forEach(e => e.style.transform = `translateX(-50%) rotate(${secDeg}deg)`)
    minLine.forEach(e => e.style.transform = `translateX(-50%) rotate(${minDeg}deg)`)
    hourLine.forEach(e => e.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`)

}

function updateClockShadow() {
    const hourLine = document.querySelector(".classic .hour svg");
    const minLine = document.querySelector(".classic .min svg");
    const secLine = document.querySelector(".classic .sec svg");

    const nowClock = new Date();
    const h = nowClock.getHours() % 12;
    const m = nowClock.getMinutes();
    const s = nowClock.getSeconds();

    const hoursDeg = (h + m / 60) * 30;
    const minsDeg = (m + s / 60) * 6;
    const secsDeg = s * 6;

    const hrad = ((hoursDeg - 35) * Math.PI / 180);
    let hdx = Math.cos(hrad) * 8;
    let hdy = Math.sin(hrad) * 2;
    
    const mrad = ((minsDeg - 35) * Math.PI / 180);
    let mdx = Math.cos(mrad) * 7;
    let mdy = Math.sin(mrad) * 2;

    const srad = ((secsDeg - 35) * Math.PI / 180);
    let sdx = Math.cos(srad) * 6;
    let sdy = Math.sin(srad) * 2;
    
    hourLine.style.filter = `drop-shadow(${hdx}px ${hdy}px 4px rgba(0,0,0,0.35))`
    minLine.style.filter = `drop-shadow(${mdx}px ${mdy}px 3px rgba(0,0,0,0.35))`
    secLine.style.filter = `drop-shadow(${sdx}px ${sdy}px 2px rgba(0,0,0,0.35))`
}

function tooltipMove() {
    const tooltip = document.querySelector(".tooltip");
    const texthere = tooltip.querySelector(".text-here")
    document.querySelectorAll("div").forEach((element) => {

        if (!element.dataset.info) return;

        element.addEventListener("mouseenter", () => {
            texthere.innerHTML = element.dataset.info;
            tooltip.style.opacity = "1";
        });
        element.addEventListener("mousemove", (e) => {
            tooltip.style.top = e.clientY + 5 + "px";
            tooltip.style.left = e.clientX + 5 + "px";
        });
        element.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        })
    })
}


button.addEventListener("click", () => {
    frontAlert.classList.add("active");
    getLocation();
    tooltipMove();
})

dateSet();
timeSet();

setInterval(dateSet, 10000);
setInterval(timeSet, 1000);
setInterval(getLocation, 600000);
setInterval(updateClockShadow, 1000);
