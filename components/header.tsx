import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Container,
} from "@chakra-ui/react";

export default function Menubar() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Blog</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
}
