import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRuleRounded24Px = (
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
    <path d="m15.83 10.29-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.39.4-1.02.4-1.41.01M10 7H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1m10.29 5.71a.996.996 0 0 0-1.41 0L17 14.59l-1.88-1.88a.996.996 0 1 0-1.41 1.41L15.59 16l-1.88 1.88a.996.996 0 1 0 1.41 1.41L17 17.41l1.88 1.88a.996.996 0 1 0 1.41-1.41L18.41 16l1.88-1.88a.996.996 0 0 0 0-1.41M10 15H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgRuleRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
