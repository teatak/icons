import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderCopySharp24Px = (
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
    <path d="M3 6H1v15h19v-2H3z" />
    <path d="M23 4h-9l-2-2H5.01L5 17h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderCopySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
