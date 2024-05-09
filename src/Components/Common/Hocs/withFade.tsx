import {motion, Transition} from "framer-motion";

import React from "react";

function withFade<P extends object>(WrappedComponent: React.ComponentType<P>, transition: Transition) {
    const key = new Date().getTime();

    return (props : P) => (
        <>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1, transition}}
                        exit={{opacity: 0}}
                        key={key}
                        style={{height: '100%'}}>
                <WrappedComponent {...props} />
            </motion.div>
        </>
    )
}

export default withFade;