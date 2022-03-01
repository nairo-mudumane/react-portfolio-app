import React from "react";
import { IScrollableData } from "./types";
import Scrollbar from "react-smooth-scrollbar";
import { useLocation } from "react-router-dom";

export default function ScrollableData(props: IScrollableData) {
    const domScroll = document.getElementById("scrollbar");
    const ref = React.useRef(domScroll);
    const { pathname } = useLocation();

    console.log(ref);
    React.useEffect(() => {
        //   const { scrollbar } = ref.current;
        //   scrollbar.setPosition(0, 0);
    }, [pathname]);

    return (
        <Scrollbar id="scrollbar" ref={ref} damping={0.1} continuousScrolling>
            {props.children}
        </Scrollbar>
    );
}
