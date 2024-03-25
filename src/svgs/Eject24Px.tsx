import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEject24Px = (
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
    <path fill="none" d="M0 24V0h24v24z" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEject24Px);
const Memo = memo(ForwardRef);
export default Memo;
