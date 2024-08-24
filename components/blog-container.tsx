import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

type blogProps = {
  index: number;
};

const BlogBox = ({ index }: blogProps) => {
  return (
    <div className="  relative group w-full h-[32rem] bg-zinc-900 shadow-slate-300 flex flex-col justify-center items-center shadow border-slate-500 rounded-2xl border-2 gap-4 ">
      <div className=" w-full h-4/6 transition-all ease-in-out duration-300 group-hover:h-1/3 flex justify-start items-center ">
        <Image
          src={"/blog_test.jpeg"}
          alt="blog"
          width={800}
          height={800}
          className=" w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className=" w-full h-full mb-4 group-hover:mb-12 transition-all ease-in-out duration-300 overflow-hidden rounded-b-2xl flex flex-col justify-start items-center ">
        <h1 className=" w-full text-left px-4 text-3xl font-semibold">
          Blog Title
        </h1>

        <p className=" p-4  text-lg ">
          description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
          adipiscing nec, ultricies sed, dolor. Cras elementum ultricies diam.
          Maecenas ligula massa, varius a, semper congue, euismod non, mi Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultricies diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi Maecenas ligula massa,
          varius a, semper congue, euismod non, mi Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
          dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
          elementum ultricies diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi
        </p>

        <Link
          href={`/blog/${index + 1}`}
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
    </div>
  );
};

export default BlogBox;
