import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg4KPlusOutlined24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z" />
    <path d="M8.5 15H10v-1.5h1V12h-1V9H8.5v3H7V9H5.5v4.5h3zM13 12.75 14.75 15h1.75l-2.25-3 2.25-3h-1.75L13 11.25V9h-1.5v6H13z" />
  </svg>
);
const ForwardRef = forwardRef(Svg4KPlusOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
