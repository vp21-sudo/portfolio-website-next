import { ArrowRight } from "lucide-react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

type blogProps = {
  index: number;
  image: string;
  title: string;
  handle: string;
  content: string;
  createdAt: string;
};

const BlogBox = ({
  index,
  image,
  title,
  handle,
  content,
  createdAt,
}: blogProps) => {
  const checkIsNew = () => {
    const oneWeekAgo = dayjs().subtract(1, "week");
    const createdAtDate = dayjs(createdAt);
    return createdAtDate.isBefore(oneWeekAgo);
  };
  return (
    <div className="  relative group w-full h-[28rem] bg-zinc-900 shadow-slate-300 flex flex-col justify-center items-center shadow border-slate-500 rounded-2xl border-2 gap-4 ">
      <div className=" w-full h-full transition-all ease-in-out overflow-hidden duration-300 group-hover:h-1/3 flex justify-start items-center ">
        <Image
          src={"https://vp-blogs.s3.ap-south-1.amazonaws.com/blog/" + image}
          alt="blog"
          width={800}
          height={800}
          className=" w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className=" w-full h-full mb-4 group-hover:mb-12 transition-all ease-in-out duration-300 overflow-hidden rounded-b-2xl flex flex-col justify-start items-center ">
        <h1 className=" w-full text-left px-4 text-3xl font-semibold">
          {title}
        </h1>

        <div
          className=" w-full text-xl p-4 "
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <Link
          href={`/blog/${handle}`}
          className="
          scale-y-0 group-hover:scale-y-100
          flex justify-center items-center

          transition-all ease-in-out duration-200

        cursor-pointer text-xl text-slate-50 font-semibold  w-full absolute bottom-0 bg-zinc-900

        rounded-xl p-2 py-4  "
        >
          {
            <>
              <span className=" px-4 ">Read More</span>

              <ArrowRight className=" " />
            </>
          }
        </Link>
      </div>

      {!checkIsNew() && (
        <div className=" bg-slate-800 opacity-60 group-hover:opacity-90 transition-all ease-in-out duration-300 font-bold absolute top-2 right-2 border-2 rounded-full p-2 px-4 text-sm">
          New
        </div>
      )}
    </div>
  );
};

export default BlogBox;
