import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClosedCaptionDisabledSharp24Px = (
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
    <path d="M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17zm12.95 18.61L17.17 20H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClosedCaptionDisabledSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
