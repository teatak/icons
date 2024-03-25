import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFindInPageOutlined24Px = (
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
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zM6 4h7l5 5v8.58l-1.84-1.84a4.99 4.99 0 0 0-.64-6.28A4.96 4.96 0 0 0 12 8a5 5 0 0 0-3.53 1.46 4.98 4.98 0 0 0 0 7.05 4.98 4.98 0 0 0 6.28.63L17.6 20H6zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11" />
  </svg>
);
const ForwardRef = forwardRef(SvgFindInPageOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
