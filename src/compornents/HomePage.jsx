import React, { useEffect, useRef } from 'react';
import html_icon from "../Images/html_icon.png";
import css_icon from "../Images/css_icon.png";
import javascript_icon from "../Images/javascript_icon.png";
import react_icon from "../Images/react_icon.png";
import nextjs_icon from "../Images/nextjs_icon.png";
import python_icon from "../Images/python_icon.png";
import Go_icon from "../Images/Go-icon.png";
import supabase_icon from "../Images/supabase_icon.png";
import profileImage from "../Images/blackholl.gif";
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const HomePage = () => {
  const carouselRef = useRef(null);

  // ★ このuseEffectの中を修正しました
  useEffect(() => {
    const carousel = carouselRef.current;
    const images = gsap.utils.toArray('.carousel-image', carousel);
    
    const radius = 242;
    const progress = { value: 0 };

    // ★ 修正点 1: Observer.createの結果を変数に保存する
    const observerInstance = Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => {
        carousel.style.cursor = 'grabbing';
      },
      onRelease: () => {
        carousel.style.cursor = 'grab';
      },
      onChange: (self) => {
        gsap.killTweensOf(progress);
        const p = self.event.type === 'wheel' ? self.deltaY * -0.0005 : self.deltaX * 0.05;
        gsap.to(progress, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${p}`
        });
      }
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
        const c = Math.floor(index / images.length * 360);
        image.style.background = `hsla(${c}, 90%, 50%, .5)`;
      });
    };
    gsap.ticker.add(animate);
    
    // ★ 修正点 2: 保存した変数を使ってkillする
    return () => {
      gsap.ticker.remove(animate);
      observerInstance.kill(); // Observer.get()から変更
    }
  }, []);

  return (
    <div className="container text-center">
      <h1>Raito code</h1>

      <img src={profileImage} className="profileImage" alt="プロフィール画像"/>

      <p>
        Raito codeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。<br/>
        主にHTML/CSS/Javascript/Reactをメインに取り扱っており、次はGoとPythonを学習しようかと思っています。<br/>
        趣味は個人でプログラミングの学習を行うことです。
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">ECサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">レスポンシブサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">ウェブセキュリティ</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-image">
            <img src={html_icon} alt="HTML" />
          </div>
          <div className="carousel-image">
            <img src={css_icon} alt="CSS" />
          </div>
          <div className="carousel-image">
            <img src={javascript_icon} alt="JavaScript" />
          </div>
          <div className="carousel-image">
            <img src={react_icon} alt="React" />
          </div>
          <div className="carousel-image">
            <img src={nextjs_icon} alt="Next.js" />
          </div>
          <div className="carousel-image">
            <img src={supabase_icon} alt="Supabase" />
          </div>
          <div className="carousel-image">
            <img src={Go_icon} alt="Go" />
            <p className="Schedule">学習予定</p>
          </div>
          <div className="carousel-image">
            <img src={python_icon} alt="Python" />
            <p className="Schedule">学習予定</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;