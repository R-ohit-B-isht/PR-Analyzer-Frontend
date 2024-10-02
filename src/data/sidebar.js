import { jsx as _jsx } from "react/jsx-runtime";
import { FaTh } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
const menu = [
    {
        title: "Dashboard",
        icon: _jsx(FaTh, {}),
        path: "/admin/home",
    },
    {
        title: "Account",
        icon: _jsx(BiUserCircle, {}),
        children: [
            {
                title: "Profile",
                icon: _jsx(BiUserCircle, {}),
                path: "/admin/profile",
            },
            {
                title: "My Subscription",
                path: "/admin/account",
            },
        ],
    },
];
export default menu;
