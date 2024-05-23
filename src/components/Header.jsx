import { SearchBtn } from "./index.js";
import ProfileModal from "./ProfileModal.jsx";
const Header = () => {

    return (
        <div className='w-[calc(100%-240px)] justify-end bg-white self-center py-1 px-2 flex-1 top-0 right-0 pr-4 fixed '>
            <div className={'flex justify-between items-center rounded'}>
                <div className={'w-1/2 justify-start'}>
                    <SearchBtn />
                </div>
                <ProfileModal/>
            </div>
        </div>
    );
};

export default Header;
