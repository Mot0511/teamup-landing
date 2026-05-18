'use client'
import { useEffect } from "react";
import './index.css';
import './globals.css';

export default function Home() {

  useEffect(() => {
    if (window.innerWidth <= 1100) {
      document.getElementById('header')!.innerHTML = '\
          <div className="brand">\
              <img src="img/icon.png" className="icon" alt="">\
              <div>\
                  <h1 className="header__heading">Teamup</h1>\
              </div>\
          </div>\
          <a href="#download"><button className="btn primary-btn">Скачать</button></a>\
          '
    }
  }, [])

  return (
    <>
      <header id="header">
        <div className="brand">
            <img src={"icon.png"} className="icon" alt="" />
            <div>
                <h1 className="header__heading">Teamup</h1>
                <p className="header__subheading">by MatveySuvorov</p>
            </div>
        </div>
        <div className="menu">
            <a href="#whatisit" className="menu__item">что это?</a>
            <a href="#howitworks" className="menu__item">как это работает?</a>
            <a href="#features" className="menu__item">фичи</a>
            <a href="#aboutme" className="menu__item">о создателе</a>
        </div>
        <a href="#download"><button className="btn primary-btn">Скачать Teamup</button></a>
    </header>
    <main>
        <div className="cover">
            <div className="cover__info">
                <p>
                    <span className="primary-text">Здесь</span>
                    можно быстро найти тиммейта для игры
                </p>
                <div>
                    <a href="https://www.rustore.ru/catalog/app/ru.ballisty.teamup" target="_blank"><button className="btn primary-btn">Скачать для Android</button><br /></a>
                    <a href="https://disk.yandex.ru/d/Vf8K9thOcwetDg" target="_blank"><button className="btn secondary-btn">Скачать для Windows</button></a>
                </div>
            </div>
            <div className="cover__screens">
                <div>
                    <img src="img/pc-screen.png" alt='' />
                </div>
                <img src="img/phone-screen.png" alt='' />
            </div>
        </div>
        <div className="block" id="whatisit">
            <h2>Что это такое?</h2>
            <p>
                <span className="primary-text">Teamup</span> - это приложение для быстрого поиска тиммейтов в команду для игры, просто по нажатию одной кнопки.
            </p>
                <p>Во многих играх эта функция встроена (CS 2, Dota 2, Fortnite), но существуют и такие игры, которые не имеют функции быстрого автопоиска тиммейтов (Rust, Minecraft, Terraria).
                Игрокам таких игр приходится искать себе товарищей на разных серверах через встроенные чаты, если их друзья не могут с ними поиграть, что долго и очень неудобно.
                Поэтому было создано отдельное приложения для быстрого поиска тиммейтов для любой игры.
            </p>
        </div>
        <div className="block" id="howitworks">
            <h2>Как это работает?</h2>
            <div className="steps">
                <div className="step">
                    <img src="img/steps/1.png" alt='' />
                    <p>Выбираешь критерия и жмешь кнопку</p>
                </div>
                <div className="step">
                    <img src="img/steps/2.png" alt='' />
                    <p>Немного ждешь...</p>
                </div>
                <div className="step">
                    <img src="img/steps/3.png" alt='' />
                    <p>Команды сформирована!</p>
                </div>
            </div>
        </div>
        <div className="block" id="features">
            <h2>Что тут вообще есть?</h2>
            <div className="features">
                <div>
                    <div className="feature">
                        <img src="img/features/filters.png" alt="" />
                        <p>Простые фильтры для автопоиска</p>
                    </div>
                    <div className="feature">
                        <img src="img/features/voice.png" alt="" />
                        <p>Голосовой чат команды</p>
                    </div>
                </div>
                <div>
                    <div className="feature">
                        <img src="img/features/profile.png" alt="" />
                        <p>Возможность добавлять<br /> друг друга в друзья</p>
                    </div>
                </div>
                <div>
                    <div className="feature">
                        <img src="img/features/chat.png" alt="" />
                        <p>Личные чаты</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="block center" id="download">
            <h2>Скачать <span className="primary-text">Teamup</span></h2>
            <a href="https://www.rustore.ru/catalog/app/ru.ballisty.teamup" target="_blank"><button className="btn primary-btn">для Android</button></a>
            <a href="https://disk.yandex.ru/d/Vf8K9thOcwetDg" target="_blank"><button className="btn secondary-btn">для Windows</button></a>
        </div>
        <div className="block" id="aboutme">
            <h2>О создателе</h2>
            <p>
                Привет, меня зовут Матвей, и я создатель этой штуки. <br /><br />
                
                Однажды мы с друзьями решили поиграть в игру Gartic Phone (испорченный телефон).
                Нас было всего трое, а для комфортной и действительно интересной игры нужно как минимум 10 игрков.
                В этой игре нет встроенного автопоиска тиммейтов, поэтому нам пришлось искать их на сторонних форумах (привет Двач).
                Осознав, что это долго и очень неудобно, я решил создать приложение, где можно было бы найти приятеля для игры, просто по нажатию одной кнопки. 
                После формирования команды, игроков перекидывало бы на экран этой команды, где можно было бы общаться через текстовый и/или голосовой чаты. <br /><br />
                
                Проще говоря, я просто вынес функцию автопоиска из игры в отдельное приложение, чтобы можно было быстро и удобно найти тиммейта для любой игры)<br /><br />
                
                Кому интересно, можете посетить мой <a href="https://www.youtube.com/@matveysuvorov" className="youtube">ютуб</a>, <a href="https://t.me/motsuv" className="telegram">телеграм канал</a>, <a className="github" href="https://github.com/Mot0511/teamup">гитхаб</a> или <a className="site" href="https://matvey.vercel.app/">личный сайт</a>. <br />
                Если что-то хочется мне сказать, можете писать в <a className="telegram" href="https://t.me/Mot0511">телеграм</a>.
            
            </p>
        </div>
    </main>
    </>
  );
}
