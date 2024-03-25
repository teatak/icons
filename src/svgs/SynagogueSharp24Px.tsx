import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSynagogueSharp24Px = (
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
    <path d="M6 8v13h4v-7h4v7h4V8l-6-5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2M1 9h4v12H1zM21 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2M19 9h4v12h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSynagogueSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
