import { NavLink } from 'react-router-dom';

function NavItem({to, title}) {
    return (
        <li className='mr-4'>
            <NavLink 
                to={to} 
                className={({ isActive }) =>
                    isActive ? 'font-bold' : ''
                }>
                    {title}
            </NavLink>
        </li>
    );
}

export default NavItem;