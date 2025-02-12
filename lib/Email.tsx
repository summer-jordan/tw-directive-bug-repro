import { TailwindConfig } from '@react-email/components'
import { Body, Container, Head, Html, Tailwind, Text } from '@react-email/components/dist'

export function Email({twConfig}: { twConfig: TailwindConfig }) {
  return (
    <Html>
      <Tailwind config={twConfig}>
        <Head />
        <Body>
          <Container className="p-8 md:p-4">
            <Text>Testing</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
