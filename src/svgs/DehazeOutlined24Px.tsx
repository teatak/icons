import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDehazeOutlined24Px = (
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
    <path d="M2 16v2h20v-2zm0-5v2h20v-2zm0-5v2h20V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDehazeOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
