import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatSize24Px = (
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
    <path d="M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatSize24Px);
const Memo = memo(ForwardRef);
export default Memo;
