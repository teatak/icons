import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBalconySharp24Px = (
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
    <path d="M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBalconySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
