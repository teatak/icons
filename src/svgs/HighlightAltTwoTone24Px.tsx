import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHighlightAltTwoTone24Px = (
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
    <path d="M17 5h-2V3h2zm-2 10v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15zm4-6h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 17h2v-2H3zm2 4v-2H3c0 1.1.9 2 2 2M19 3v2h2c0-1.1-.9-2-2-2m-8 2h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm0-8h2V3c-1.1 0-2 .9-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgHighlightAltTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
