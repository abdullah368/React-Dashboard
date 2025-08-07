
import { Button, Card, Image, Text } from "@chakra-ui/react"

const About = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      {/* <Image
        src="./ab.png"
        alt="Green double couch with wooden legs"
      /> */}
      <Card.Body gap="2">
        <Card.Title>Abdullah Siddique</Card.Title>
        <Card.Description>
          A Software Engineer with a passion for building scalable web applications and working across the full stack.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        {/* <Button variant="solid"> </Button>
        <Button variant="ghost">Add to cart</Button> */}
      </Card.Footer>
    </Card.Root>
  )
}
export default About;