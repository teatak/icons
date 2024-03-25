import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubtitlesSharp24Px = (
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
    <path d="M22 4H2v16h20zM4 12h4v2H4zm10 6H4v-2h10zm6 0h-4v-2h4zm0-4H10v-2h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSubtitlesSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
