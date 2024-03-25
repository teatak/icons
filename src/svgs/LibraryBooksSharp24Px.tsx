import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLibraryBooksSharp24Px = (
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
    <path d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLibraryBooksSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
