import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Loader from '../../loader/Loader';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [isLoading]);
    return (_jsx(_Fragment, { children: isLoading ? (_jsx(Loader, {})) : (_jsxs("div", { children: [_jsx("h3", { children: "Dashboard ~" }), _jsxs("p", { children: ["This is the user's ", _jsx("b", { children: "Dashboard Page" })] })] })) }));
};
export default Home;
