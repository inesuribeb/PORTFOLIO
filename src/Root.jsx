import { Outlet, Link } from 'react-router-dom';
import Header from './components/header/Header';

function Root() {
    return (
        <>
            <Header />
    
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;