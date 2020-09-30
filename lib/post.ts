import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


type PostData = {
  id: string,
  title: string,
  date: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: PostData[] = fileNames.map(fileName => {
    // idを取得するためにファイル名から".md"を削除する
    const id = fileName.replace(/\.md$/, '')

    // マークダウンファイルを文字列として読み取る
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)

    // データをidと合わせる
    return {
      id,
      ...matterResult.data as Pick<PostData, 'title' | 'date'>
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date > b.date) return 1

    return -1
  })
}