import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg8KPlusOutlined24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 15h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5h1v1.5h-1zm0 2.5h1V14h-1z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z" />
    <path d="M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" />
  </svg>
);
const ForwardRef = forwardRef(Svg8KPlusOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
