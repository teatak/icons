import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDehaze24Px = (
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
    <path d="M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDehaze24Px);
const Memo = memo(ForwardRef);
export default Memo;
