import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigation24Px = (
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
    <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNavigation24Px);
const Memo = memo(ForwardRef);
export default Memo;
