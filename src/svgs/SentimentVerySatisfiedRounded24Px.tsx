import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSentimentVerySatisfiedRounded24Px = (
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
    <path d="m8.88 9.94.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.89.88c-.29.29-.29.77 0 1.06s.77.29 1.06 0zM12 17.5c2.03 0 3.8-1.11 4.75-2.75a.503.503 0 0 0-.44-.75H7.69c-.38 0-.63.42-.44.75A5.49 5.49 0 0 0 12 17.5m1.53-7.03c.29.29.77.29 1.06 0l.53-.53.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.88.88c-.3.29-.3.77-.01 1.06M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgSentimentVerySatisfiedRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
