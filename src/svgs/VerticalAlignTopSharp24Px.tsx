import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVerticalAlignTopSharp24Px = (
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
    <path d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignTopSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
