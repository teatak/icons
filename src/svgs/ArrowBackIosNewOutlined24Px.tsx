import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBackIosNewOutlined24Px = (
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
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowBackIosNewOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
