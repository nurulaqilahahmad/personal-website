import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return null;
}



// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//         const { location } = this.props;
//         if (location.pathname !== prevProps.location.pathname) {
//             window.scrollTo(0,0);
//         }
//     }

//     render() {
//         const { children } = this.props;
//         return children;
//     }
// }

// export default withRouter(ScrollToTop);