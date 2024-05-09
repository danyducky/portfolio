import {
    useState,
    useEffect
} from 'react';

interface CollapsableProps {
    children: JSX.Element;
    waitBeforeShow?: number;
}

function Collapsable({children, waitBeforeShow = 500}: CollapsableProps) {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    if (!isShown) {
        return (
            <div style={{visibility: 'collapse'}}>
                {children}
            </div>
        )
    }

    return children;
}

export default Collapsable;