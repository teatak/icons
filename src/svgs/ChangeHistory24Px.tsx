import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChangeHistory24Px = (
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
    <path d="M12 7.77 18.39 18H5.61zM12 4 2 20h20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChangeHistory24Px);
const Memo = memo(ForwardRef);
export default Memo;
