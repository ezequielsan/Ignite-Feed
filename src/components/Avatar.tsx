import styles from './Avatar.module.css' 
 
interface AvatarProps {
  hasBorder?: boolean;
  imageSrc: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, imageSrc, alt }: AvatarProps) {
  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
      src={ imageSrc }
      alt={ alt }
    />
  )
}