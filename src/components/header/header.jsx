import { useState, useEffect, useRef} from 'react';
import './header.scss';
import EyeMover from './eyeMover/eyeMover'
import '../../styles/index.scss';
import logo from '../../assetss/image/logo.svg'
import Links from './headerLinks/links'



function Header() {
  const menuRef = useRef();
  const bgMenuRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  
  
  function showMenu() {
    menuRef.current.classList.toggle('active')
    bgMenuRef.current.classList.toggle('icClose_active')

  }

  useEffect(()=>{
    const showHeader = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }
    window.addEventListener('scroll', showHeader)
    if(scrollTop === 0){
      setScrolling(false)
      return () => window.removeEventListener('scroll', showHeader)
    }
  }, [scrollTop]);

  return (
      <header className={scrolling === true ? 'header' : 'header headerFixed'}>
        <div  ref={menuRef} className={scrolling? "headerMenu" : 'headerMenu headerFixed'}>
          <div className="conteiner">
            <Links/>
          </div>
        </div>
        <div className='conteiner'>
            <div className='mainHeadercolumn'>

                <div className='headerLogo'>
                  <EyeMover />
              	  <img src={logo} alt='logo'/>
                </div>

			          <div className='headerLinks'>
                  <Links />
                </div>
                <div ref={bgMenuRef} onClick={showMenu} className={scrolling? "headerBurgerMenu icClose_active" : 'headerBurgerMenu'}>
                  <span className='top'></span><span className='bottom'></span>
                </div>
            </div>

        </div>
      </header>
  );
}

export default Header;
