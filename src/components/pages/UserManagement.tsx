import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://images.unsplash.com/photo-1583875074734-b6fd484ddc67"
          userName="亜紀子"
          fullName="akiko kano"
        />
      </WrapItem>
    </Wrap>
  );
});
