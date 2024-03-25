import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEmojiSymbolsRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1M10 2H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1M20.89 13.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41" />
    <circle cx={14.5} cy={14.5} r={1.5} />
    <circle cx={19.5} cy={19.5} r={1.5} />
    <path d="M15.5 11A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5M10.45 18.09a.996.996 0 1 0-1.41-1.41l-.71.71-.71-.71.35-.35c.98-.98.98-2.56 0-3.54a2.5 2.5 0 0 0-1.77-.73 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.48 1.14.72 1.78.72s1.28-.24 1.77-.73l1.06-1.06.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71zm-4.6-3.89c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36c-.12-.12-.15-.26-.15-.35s.03-.23.15-.35m0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15S5 19.59 5 19.5s.03-.23.15-.35l1.06-1.06.71.71z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEmojiSymbolsRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
