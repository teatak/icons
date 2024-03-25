import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagTwoTone24Px = (
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
    <path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity={0.3} />
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlagTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
