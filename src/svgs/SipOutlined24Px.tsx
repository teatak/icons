import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSipOutlined24Px = (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2m0 2v12h16V6zm7 3h2v6h-2zm3 0h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm3.5 1.5h-2v1h2zm-11 .75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSipOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
