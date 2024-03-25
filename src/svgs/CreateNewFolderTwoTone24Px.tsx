import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCreateNewFolderTwoTone24Px = (
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
    <path
      d="m11.17 8-.59-.59L9.17 6H4v12h16V8zM14 10h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
      opacity={0.3}
    />
    <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l1.41 1.41.59.59H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCreateNewFolderTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
