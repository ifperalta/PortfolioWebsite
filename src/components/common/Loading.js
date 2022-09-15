import React from "react";
const Loading = () => {
    return (<div id="preloader">
                <div id="loader">
                    <div className="lds-ripple">
                            <div></div><div></div>
                    </div>
                </div>
            </div>);
}   
export default Loading;