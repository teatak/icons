import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSnowshoeingRounded24Px = (
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
    <path d="M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.5 8.41c0-.49-.36-.9-.84-.98-1.53-.25-2.79-1.16-3.47-2.35l-1-1.58c-.4-.6-1-1-1.7-1-.68 0-1.28.28-4.77 1.76C7.49 8.07 7 8.8 7 9.6V12c0 .55.45 1 1 1s1-.45 1-1V9.58l1.79-.7L9.2 17l-2.88 2.03-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07a.84.84 0 0 0-.31-.22 3 3 0 0 1-1.14-.83l-.08-.1 2.85-2.01c.38-.27.65-.66.77-1.1l.7-2.53 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-5.16c0-.55-.23-1.07-.62-1.45l-1.49-1.41.6-3a7.37 7.37 0 0 0 4.37 2.43c.6.1 1.14-.39 1.14-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnowshoeingRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
