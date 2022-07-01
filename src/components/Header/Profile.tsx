import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
     { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo</Text>
          <Text color="gray.300" fontSize="small">
            falcionegustavo@gmail.com
          </Text>
        </Box>
     )}
      <Avatar size="md" name="Gustavo Falcione" src="https://github.com/gustavofalcione.png"/>
    </Flex>
  )
}