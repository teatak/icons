import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCommentBankSharp24Px = (
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
    <path d="M2 2v20l4-4h16V2zm17 11-2.5-1.5L14 13V5h5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCommentBankSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
