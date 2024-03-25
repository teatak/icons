import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHdrOnSelectSharp24Px = (
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
    <path d="M18 19.9V16h-5v6h1.5v-2h1.1l.9 2H18l-.9-2.1zm-1.5-1.4h-2v-1h2zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6" />
  </svg>
);
const ForwardRef = forwardRef(SvgHdrOnSelectSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
