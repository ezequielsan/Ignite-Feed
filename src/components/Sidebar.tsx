import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import { PencilLine }  from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
      <img 
        className={  styles.cover }
        src="https://images.unsplash.com/photo-1617869884925-f8f0a51b2374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
      />
      
      <div className={ styles.profile }>
        <Avatar src={"https://github.com/3b1b.png"}/>
        <strong>3Blue1Brown</strong>
        <span>Mathematician</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
} 