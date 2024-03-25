import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCollectionsSharp24Px = (
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
    <path d="M22 18V2H6v16zm-11-6 2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCollectionsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
