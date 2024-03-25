import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTopicSharp24Px = (
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
    <path d="m12 6-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTopicSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
