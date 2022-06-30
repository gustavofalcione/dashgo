import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo</Text>
        <Text color="gray.300" fontSize="small">
          falcionegustavo@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Gustavo Falcione" src="https://github.com/gustavofalcione.png"/>
    </Flex>
  )
}