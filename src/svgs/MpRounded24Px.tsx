import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMpRounded24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 9h4.5c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v3.75c0 .41-.34.75-.75.75S6 14.66 6 14.25V10c0-.55.45-1 1-1m7.25 6c-.41 0-.75-.33-.75-.75V10c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75m.75-3h1.5v-1.5H15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMpRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
