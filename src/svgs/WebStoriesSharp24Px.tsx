import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebStoriesSharp24Px = (
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
    <path d="M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebStoriesSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
