import React from 'react';

const Transition = ({classes, children}) => {
    return (
        <>
            {({ match }) => (
                <CSSTransition
                in={match !== null}
                timeout={200}
                classNames="page"
                unmountOnExit
                >
                    {children}
                </CSSTransition>
            )}
        </>
    )
}

export default Transition;