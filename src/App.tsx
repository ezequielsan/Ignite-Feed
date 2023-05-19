import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import './global.css';

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://github.com/BjarneStroustrup.png',
      name: 'Bjarne Stroustrup' ,
      role: 'Computer Scientist'
    },
    content: [
      { type: 'paragraph', content: 'Tornando a programação mais eficiente com C++.' },
      { type: 'paragraph', content: 'Neste post, gostaria de discutir algumas práticas eficientes de programação com a linguagem C++. Como criador da linguagem, estou constantemente procurando maneiras de maximizar o desempenho e a eficiência do código. Compartilharei algumas dicas e truques que podem ajudar os desenvolvedores a escreverem código C++ mais otimizado.'},
      { type: 'link', content: '👉  https://www.stroustrup.com/'}
    ],
    publishedAt: new Date('2023-05-16 20:00:00')
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://github.com/torvalds.png',
      name: 'Linus Torvalds',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'A importância da colaboração aberta no desenvolvimento de software.' },
      { type: 'paragraph', content: 'Neste post, gostaria de destacar a importância da colaboração aberta no desenvolvimento de software. Como criador do Linux e defensor do modelo de código aberto, acredito que o compartilhamento de ideias e contribuições é essencial para a criação de projetos de software de sucesso.'},
      { type: 'link', content: '👉  https://linuxtorvalds.com/'}
    ],
    publishedAt: new Date('2023-05-14 15:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrraper }>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post 
                key={ post.id }
                author={ post.author }
                content={ post.content }
                publishedAt={ post.publishedAt }
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}


