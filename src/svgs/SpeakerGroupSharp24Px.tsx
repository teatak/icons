import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerGroupSharp24Px = (
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
    <path d="M20 1H8v17.99h12zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4" />
    <circle cx={14} cy={12.5} r={2.5} />
    <path d="M6 5H4v18h12v-2H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeakerGroupSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
