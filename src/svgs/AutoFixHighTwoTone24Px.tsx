import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAutoFixHighTwoTone24Px = (
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
    <path d="m4.415 18.167 7.17-7.17 1.414 1.414-7.17 7.17z" opacity={0.3} />
    <path d="m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zM17.71 9.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42M5.83 19.59l-1.41-1.41L11.59 11 13 12.41zM14.41 11 13 9.59l1.17-1.17 1.41 1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAutoFixHighTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
