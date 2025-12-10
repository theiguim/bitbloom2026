import "./SectionHeader.css";

export default function SectionHeader({ 
  tag,         
  title,      
  description,  
  align = "center",
  className = "" 
}) {
  return (
    <div className={`section-header ${align} ${className}`}>

      {tag && <span className="header-tag">{tag}</span>}
      <h2 className="header-title">{title}</h2>
      {description && <p className="header-desc">{description}</p>}
      
    </div>
  );
}