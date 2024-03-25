import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRuleFolderSharp24Px = (
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
    <path d="M22 6H12l-2-2H2v16h20zM7.83 16 5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41zm9.58-3L19 14.59 17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRuleFolderSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
