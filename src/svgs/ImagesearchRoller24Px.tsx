import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImagesearchRoller24Px = (
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
    <path d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2" />
  </svg>
);
const ForwardRef = forwardRef(SvgImagesearchRoller24Px);
const Memo = memo(ForwardRef);
export default Memo;
