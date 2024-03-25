import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoNotTouch24Px = (
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
    <path d="m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zm3.5 5.92-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoNotTouch24Px);
const Memo = memo(ForwardRef);
export default Memo;
