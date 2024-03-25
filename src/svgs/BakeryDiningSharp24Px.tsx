import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBakeryDiningSharp24Px = (
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
    <path d="m16.36 7.58-.86 9.41H17l3.16-7.89zM3.84 9.1 7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zM20.32 12.75l-1.81 4.5 1.95.96 2.06-1.22zM1.48 16.99l2.06 1.22 1.95-.96-1.81-4.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBakeryDiningSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
