import MainLayout from "./MainLayout";

interface Children {
  children: any;
}

const Page = ({children}:Children) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default Page;
