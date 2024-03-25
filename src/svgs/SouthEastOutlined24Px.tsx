import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSouthEastOutlined24Px = (
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
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSouthEastOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
