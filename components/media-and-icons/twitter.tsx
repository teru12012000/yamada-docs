import { Icon, IconProps } from '@yamada-ui/react'
import { forwardRef } from 'react'

export const Twitter = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = '1.3em', ...rest }, ref) => {
    return (
      <Icon ref={ref} boxSize={boxSize} {...rest}>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          focusable='false'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z'></path>
        </svg>
      </Icon>
    )
  },
)

Twitter.displayName = 'Twitter'
