const template = (
    { imports, interfaces, componentName, props, jsx, exports },
    { tpl },
) => {
    return tpl`
    import * as React from "react";
import { createSvg } from "../Svg";

export default createSvg(${jsx.children})`
}

module.exports = template