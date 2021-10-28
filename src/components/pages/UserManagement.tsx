import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          p={4}
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://images.unsplash.com/photo-1583875074734-b6fd484ddc67"
              alt="プロフィール画像"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              亜紀子
            </Text>
            <Text fontSize="sm" color="gray">
              加納亜紀子
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
