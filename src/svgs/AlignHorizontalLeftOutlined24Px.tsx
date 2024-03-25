import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignHorizontalLeftOutlined24Px = (
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
    <path d="M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAlignHorizontalLeftOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
