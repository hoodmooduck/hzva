import './footer.scss';
import logoHaz from '../../Shared/image/logo.svg'
import logoStarojil from '../../Shared/image/logo_aboutUs.svg'
import featStiker from '../../Shared/image/ic_close.svg'
import stickerLikeCool from '../../Shared/image/stickerLikeCool.png'




function Footer() {

  return (
    <footer className='footer'>
        <div className="conteiner">
            <div className="footerColumn">

              <div className="footerRow">
                <div className="footerLogo">
                  <img className='logoHaz' src={logoHaz} alt="logoHaz" />
                </div>
                <div className="footerFeatSticker">
                  <img src={featStiker} alt="featSticker" />
                </div>
                <div className="footerLogo">
                  <img className='logoStarih' src={logoStarojil} alt="logoStrih" />
                </div>
              </div>

              <div className="footerRow">
                <a href="#whoIsHaz" className="footerLinks">Кто такие Хазяева?</a>
                <a href="#hype" className="footerLinks">Популярность</a>
                <a href="#games" className="footerLinks">Игры</a>
                <a href="#merch" className="footerLinks">Мерч</a>
              </div>

              <div className="footerRow rowSpec">
                  <div className="footerRow_elem">
                    <img src={stickerLikeCool} alt="stickerLikeCool" className="sticker" />
                    <a href="https://t.me/+17PW-qTXYjxkYjQy">
                      <span><p>Разработали</p>
                        <img className='logoStarih_span hoverAnim' src={logoStarojil} alt="logoStrih" />
                      </span>
                    </a>
                  </div>
                  <div className="footerRow_elem">
                    <p className="noCommertion">
                      Все картинки используются в некоммерческих целях :)
                    </p>
                  </div>
              </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;