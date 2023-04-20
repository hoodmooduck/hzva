import './links.scss';
import  menu  from './menu';



function Links() {
  
  return (
    <div className="links">
      <ul className='mainLinkColumn'>
        {menu.map((item,idx) => (
          <li key={`id ${idx}`} className='linksItem hoverAnim'>
            <a id='linkHover whiteTextHover' href={item.link}>{item.nameLink}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
