import {json} from '@sveltejs/kit'

export const prerender = true;

async function getPosts() {
    let posts = []

    const paths = import.meta.glob('/src/lib/content/work/*.md', {eager: true})

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata
            const content = file.default;
            const post = {...metadata, content, slug}
            posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        first.order - second.order
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}