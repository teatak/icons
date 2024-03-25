import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHttpSharp24Px = (
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
    <path fill="none" d="M24 24H0V0h24z" opacity={0.87} />
    <path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zM23 9h-5v6h1.5v-2H23zm-1.5 2.5h-2v-1h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHttpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
