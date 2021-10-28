import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {};

export const UserCard: VFC<Props> = memo((props) => {
  const {} = props;
  return (
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
  );
});
