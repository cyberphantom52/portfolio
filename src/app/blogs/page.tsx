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
    <div className="flex flex-col md:grid grid-cols-3 grid-flow-row auto-rows-[18rem] p-5 mx-auto max-w-6xl gap-5">
      {
        [...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs, ...blogs ].map((blog, index) => {
          let className = "backdrop-blur-[4px] border border-black border-opacity-20 dark:border-white dark:border-opacity-10 dark:hover:border-opacity-25 ";
          let titleClass = "capitalize font-bold text-xl line-clamp-2 ";
          let descriptionClass = "text-lg ";
          if (index == 0) {
            className += "md:row-span-1 md:col-span-2 bg-[#0071E3] bg-opacity-30 dark:bg-[#1277de] dark:bg-opacity-30"
            titleClass += "md:text-4xl md:line-clamp-3"
          } else {
            className += "bg-[#c8a489] bg-opacity-5 dark:bg-white dark:bg-opacity-10"
          }
          return <BlogCard key={index} cardClass={className} titleClass={titleClass} descriptionClass={descriptionClass} metadata={blog} />
        })
      }
    </div>
  )
}
