import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './Profile.scss';
import Card from '../../card/Card';
import { Spinner } from '../../loader/Loader';
import { toast } from 'react-toastify';
const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [isLoading]);
    const updateProfile = (e) => {
        e.preventDefault();
        toast.success('Profile updated successfully.');
    };
    return (_jsxs("div", { className: "profile", children: [_jsx("h3", { children: "Profile ~" }), _jsx(Card, { cardClass: 'card', children: isLoading ? (_jsx(Spinner, {})) : (_jsxs("form", { onSubmit: updateProfile, children: [_jsxs("p", { children: [_jsx("label", { children: "Name:" }), _jsx("input", { type: "text", placeholder: "Name", name: "name" })] }), _jsxs("p", { children: [_jsx("label", { children: "Email:" }), _jsx("input", { type: "email", placeholder: "Email", name: "email" })] }), _jsx("button", { type: "submit", className: "--btn --btn-primary --btn-block", children: "Update Profile" })] })) })] }));
};
export default Profile;
