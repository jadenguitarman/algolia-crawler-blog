import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        {`Here's some blog posts written by ChatGPT about vegetables.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
