import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatLineSpacingOutlined24Px = (
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
    <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6zm4-2v2h12V5zm0 14h12v-2H10zm0-6h12v-2H10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatLineSpacingOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
