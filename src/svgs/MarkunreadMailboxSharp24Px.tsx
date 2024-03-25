import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkunreadMailboxSharp24Px = (
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
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkunreadMailboxSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
