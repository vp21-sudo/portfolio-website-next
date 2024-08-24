import BlogBox from "@/components/blog-container";

const Page = () => {
  return (
    <>
      <div className=" w-full h-full mt-16 bg-slate-950 ">
        <div className=" w-full h-full md:container mx-auto bg-zinc-950 text-slate-50 grid grid-cols-1 md:grid-cols-3 p-4 md:p-16 gap-4 md:gap-16">
          <h1 className=" text-5xl font-semibold md:col-span-3">Blogs</h1>
          {new Array(10).fill(0).map((e, index) => (
            <BlogBox key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
