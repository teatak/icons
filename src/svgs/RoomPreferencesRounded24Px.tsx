import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoomPreferencesRounded24Px = (
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
    <path d="M21.75 17c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.49.49 0 0 0-.59-.22l-1.06.36q-.48-.405-1.08-.63l-.22-1.09a.5.5 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09q-.6.225-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36q.48.405 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09q.6-.225 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63M18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-4-7.74V6h3v4h2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h8.26A6.96 6.96 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74M10 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgRoomPreferencesRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
