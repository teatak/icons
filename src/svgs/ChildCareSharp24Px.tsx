import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChildCareSharp24Px = (
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
    <circle cx={14.5} cy={10.5} r={1.25} />
    <circle cx={9.5} cy={10.5} r={1.25} />
    <path d="M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3m10.94-5.66a4.01 4.01 0 0 0-2.81-3.17 9.1 9.1 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.99 3.99 0 0 0-2.81 3.17Q1 11.655 1 12t.06.66a4.01 4.01 0 0 0 2.81 3.17 9 9 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a4 4 0 0 0 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgChildCareSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
