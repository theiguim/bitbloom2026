import Link from "next/link";
import "./Button.css";

/* Props:
  - variant: 'primary' (Azul Padrão), 'alt' (Vidro/Branco), 'outline' (Borda apenas)
  - size: 'md' (13px - Padrão), 'lg' (Maior para Heros)
  - href: Se passar um link, ele vira um <a> (Link do Next). Se não, é um <button>.
*/
export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  href, 
  className = "", 
  ...props 
}) {
  // Monta a string de classes baseada nas props
  // Ex: "ui-btn alt md minha-classe-extra"
  const classes = `ui-btn ${variant} ${size} ${className}`;

  // Se tiver href, renderiza como Link do Next.js
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Se não tiver href, renderiza como botão normal (para formulários ou ações)
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}