import CountUpComponent from 'react-countup'
import type { ComponentProps } from 'react'

type CountUpProps = ComponentProps<typeof CountUpComponent>

// Handle dual CJS/ESM bundling where component is nested on .default
const ResolvedCountUp = (((CountUpComponent as any)?.default || CountUpComponent)) as typeof CountUpComponent

export function CountUp(props: CountUpProps) {
  const Comp = ResolvedCountUp
  return <Comp {...props} />
}

export default CountUp
