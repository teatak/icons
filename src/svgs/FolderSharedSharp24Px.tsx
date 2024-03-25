import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSharedSharp24Px = (
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
    <path d="M22 6H12l-2-2H2v16h20zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderSharedSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
