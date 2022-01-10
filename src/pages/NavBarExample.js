import Avatar from '../components/avatar';
import {ReactComponent as HomeIcon} from '../icons/home.svg';

const React = require('react');

class NavBarExample extends React.Component {
    render() {
        return (
            <div className='flex items-center justify-between px-2 py-3 px'>
                <div className='flex items-center text-gray-500 font-extralight'>
                    <button className='flex items-center text-sm px-2 py-1 rounded-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900'>
                        <HomeIcon className='w-4 mr-2 text-gray-500' />
                        Home
                    </button>
                    <span className='inline-block px-1'>&rarr;</span>
                    <span href='https://localhost:3000' className='block relative text-sm px-2 py-1 rounded-sm text-gray-600 font-semibold after:block after:absolute after:left-2 after:right-2 after:-bottom-[2px] after:h-[2px] after:bg-purple-600'>Members</span>
                </div>
                <div className="flex -space-x-2 overflow-hidden mr-2">
                    <Avatar img="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar img="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar img="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
                    <Avatar img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                </div>
            </div>
        );
    }
}

export default NavBarExample;
