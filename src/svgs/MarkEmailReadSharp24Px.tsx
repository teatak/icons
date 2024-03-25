import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkEmailReadSharp24Px = (
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
    <path d="M12 19a6.995 6.995 0 0 1 10-6.32V4H2v16h10.08c-.05-.33-.08-.66-.08-1M4 6l8 5 8-5v2l-8 5-8-5zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkEmailReadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
