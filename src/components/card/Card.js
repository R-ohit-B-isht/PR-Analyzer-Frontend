import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Card.module.scss';
const Card = ({ children, cardClass }) => {
    return _jsx("div", { className: `${styles.card} ${cardClass}`, children: children });
};
export default Card;
