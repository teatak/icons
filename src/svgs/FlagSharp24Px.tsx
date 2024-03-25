import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagSharp24Px = (
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
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlagSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
