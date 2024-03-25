import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEqualizerTwoTone24Px = (
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
    <path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEqualizerTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
