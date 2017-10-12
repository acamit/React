import React from "react";

import Navbar from "./common.components/navbar";
import ContentPanel from "./Modules/ContentPanel/content-panel";

/**
 * Organise the application outline
 */
function App(){
        return <div className = "container" >
                    <Navbar />
                    <ContentPanel />
                </div>;
}
export default App;