import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import * as contentful from 'contentful';
import Link from "next/link";

const client = contentful.createClient({
  space: 'wdzokaprz22i',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'M5MmAOnqmxljlNKUW4d8p1Qv2orUqqWnZwVUUUFME0c'
})

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

const contentfulFunction = async ():Promise<string[]> => {
  const response: any = await client.getEntries();
  const items = response.items[0].fields.product;
  console.log('Deann', items)
  return items;

}

 const items = await contentfulFunction()

  return (
    <main className={styles.main}>
      <h1>Hello!</h1>
      <ul>
        {items.map(item => (
          <li key={item}><Link href={`/${item}`}>{item}</Link></li>
        ))}
      </ul>
    </main>
  )
}