import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
function AnimeCardSkeleton() {
  return (
    <>
      <Card>
        <Skeleton height={'300px'}/>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
}

export default AnimeCardSkeleton;
