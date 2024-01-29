import { getBlogsMeta } from "../utils";
import BlogCard from "../components/BlogCard";

export default async function Blogs() {
  const blogs = await getBlogsMeta()

  if (!blogs) {
    return (
      <div className="flex place-content-center bg-secondary h-screen w-screen">
        <span className="self-center font-bold text-xl lg:text-6xl">No Blogs Found</span>
      </div>
    )
  }

  return (
    <div className="overflow-y-scroll w-screen h-screen">
      <div className="p-5 mx-auto max-w-6xl">
        <div className="flex flex-col py-12 gap-5">
          <h1 className="text-7xl font-extrabold">Blog</h1>
          <p className="text-3xl">Catch up on things i'm doing</p>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 gap-5">
          {
            blogs.map((blog, index) => {
              let className = "backdrop-blur-[4px] border border-black border-opacity-20 dark:border-white dark:border-opacity-10 dark:hover:border-opacity-25 ";
              if (index == 0) {
                className += "col-[span_2] bg-[#0071E3] bg-opacity-30 dark:bg-[#1277de] dark:bg-opacity-30"
              } else {
                className += "bg-[#c8a489] bg-opacity-5 dark:bg-white dark:bg-opacity-10"
              }
              return <BlogCard key={index} metadata={blog} cardClass={className} />
            })
          }
        </div>
      </div>
    </div>
  )
}
