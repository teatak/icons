import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDiamondOutlined24Px = (
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
    <path d="M19 3H5L2 9l10 12L22 9zM9.62 8l1.5-3h1.76l1.5 3zM11 10v6.68L5.44 10zm2 0h5.56L13 16.68zm6.26-2h-2.65l-1.5-3h2.65zM6.24 5h2.65l-1.5 3H4.74z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDiamondOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
