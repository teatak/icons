import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVerticalAlignBottomOutlined24Px = (
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
    <path d="M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignBottomOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
