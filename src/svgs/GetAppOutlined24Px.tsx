import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGetAppOutlined24Px = (
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
    <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5zm2-2H9v6H5l7 7 7-7h-4zm4 15H5v2h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGetAppOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
