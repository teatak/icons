import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwitchAccessShortcutAddOutlined24Px = (
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
    <path d="M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-3.09 1.38-5.94 3.44-8H12V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10m12 2h-2v-2h-2v2h-2v2h2v2h2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwitchAccessShortcutAddOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
