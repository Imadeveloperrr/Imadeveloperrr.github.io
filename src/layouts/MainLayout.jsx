import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

function MainLayout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage && <Sidebar />}

            <div className="page">
                <Header />
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </div>
        </>
    );
}

export default MainLayout;
