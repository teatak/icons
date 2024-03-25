import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWbIridescentTwoTone24Px = (
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
    <path d="M7 11h10v2H7z" opacity={0.3} />
    <path d="M5 15h14V9H5zm2-4h10v2H7zm4-10h2v3h-2zm6.25 4.39 1.41 1.41 1.8-1.79-1.42-1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWbIridescentTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
