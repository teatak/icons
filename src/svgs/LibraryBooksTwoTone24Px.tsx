import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLibraryBooksTwoTone24Px = (
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
      d="M8 16h12V4H8zm2-10h8v2h-8zm0 3h8v2h-8zm0 3h4v2h-4z"
      opacity={0.3}
    />
    <path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m14 12H8V4h12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLibraryBooksTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
