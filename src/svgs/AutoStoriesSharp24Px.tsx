import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAutoStoriesSharp24Px = (
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
    <path d="M21 4.6v12.02c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4S2.62 4.55 1 5.48V20c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2V5.48c-.63-.36-1.3-.64-2-.88" />
    <path d="m19 .5-5 5V15l5-4.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAutoStoriesSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
